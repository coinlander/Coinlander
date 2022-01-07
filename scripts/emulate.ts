import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers"
import * as fs from "fs";
import {BigNumber} from "ethers";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import * as logger from './logger'

// Emulate the game. Before running:
// 1. CONTRACTS: Run a local node `npm run node`
// 2. CONTRACTS: Deploy a contract `npm run deploy`
// 3. BACKEND: Run `python manage.py contracts` on backend to sync data
// 4. BACKEND: Run `python manage.py runserver 0.0.0.0:8000` to run backend server
// 5. BACKEND: Run `python manage.py listener` to run listening service
// 6. CONTRACTS: Run emulation `npm run emulate <seizures>`


// seizes = number of seizes you want to run up to on current node, ie. 100 will run up to the 100th seizure
// hre = HardhatRuntimeEnvironment, passed in via task function in hardhat.config.ts

async function emulate(seizes: number, hre: HardhatRuntimeEnvironment) {
  logger.divider()
  logger.out('Starting contract emulation...', logger.Level.Info)
  logger.divider()

  // We must use the injected hardhat param instead of directly importing because we run this
  // as a hardhat task. https://hardhat.org/advanced/hardhat-runtime-environment.html
  const {ethers} = hre

  // Load json config data. We want to use fs here instead of imports because
  // this data shouldn't be stored in git, and causes bad imports pre-deploy script
  const addressesJson = fs.readFileSync('local/addresses.json', 'utf8');
  const addresses = JSON.parse(addressesJson);

  // Attach to deployed contracts
  const Seekers = await ethers.getContractFactory("Seekers");
  const seekers = await Seekers.attach(addresses.contracts.seekers);
  const Vault = await ethers.getContractFactory("Vault")
  const vault = await Vault.attach(addresses.contracts.vault)
  const SeasonOne = await ethers.getContractFactory("SeasonOne")
  const seasonOne = await SeasonOne.attach(addresses.contracts.seasonOne)
  logger.pad(30, 'Seekers contract:', seekers.address)
  logger.pad(30, 'Vault contract:', vault.address)
  logger.pad(30, 'SeasonOne contract:', seasonOne.address)
  logger.divider()

  // // Get users
  let owner: SignerWithAddress
  let user: SignerWithAddress
  let accounts: SignerWithAddress[]
  [owner, ...accounts] = await ethers.getSigners()
  logger.pad(30, 'Owner: ', owner.address)
  logger.divider()
  accounts.map((account, i) => {
    logger.pad(30, `Account #${i}:`, account.address)
  })
  logger.divider()

  // Set up game params
  let seizureStake: BigNumber
  let additionalSeizureCount: number
  let seizureCount: number

  let remainingSeizures: number

  // Get event thresholds
  let firstSeekerMintThresh: number = (await seasonOne.FIRSTSEEKERMINTTHRESH()).toNumber()
  let secondSeekerMintThresh: number = (await seasonOne.SECONDSEEKERMINTTHRESH()).toNumber()
  let thirdSeekerMintThresh: number = (await seasonOne.THIRDSEEKERMINTTHRESH()).toNumber()
  let uncloakingThresh: number = (await seasonOne.UNCLOAKINGTHRESH()).toNumber()
  let sweetRelease: number = (await seasonOne.SWEETRELEASE()).toNumber()
  let uncloaking: boolean = await seekers.uncloaking()
  let released: boolean = await seasonOne.released()

  let firstMintActive: boolean = await seekers.firstMintActive()
  let secondMintActive: boolean = await seekers.secondMintActive()
  let thirdMintActive: boolean = await seekers.thirdMintActive()
  let currentPrice: BigNumber = await seekers.currentPrice()

  // Validate additional seizures remain
  if ((seizes) > sweetRelease) {
    return logger.out(`Seizures cannot exceed total seizures (${sweetRelease}).`, logger.Level.Error)
  }

  // Get current seizure count stored in local data
  seizureCount = (await seasonOne.seizureCount()).toNumber()
  remainingSeizures = sweetRelease - seizureCount
  logger.pad(30, 'Current seizures:', seizureCount)
  logger.pad(30, 'Remaining seizures:', remainingSeizures)
  logger.divider()

  // Get remaining seizures to run
  additionalSeizureCount = seizes - seizureCount
  if (additionalSeizureCount <= 0) {
    return logger.out(`Seizure ${seizes} is already emulated.`, logger.Level.Warn)
  }
  logger.out(`Running emulation from ${seizureCount} to ${seizes}...`, logger.Level.Info)
  logger.divider()

  // Grab the last coinlander address
  let coinlanderAddress
  let coinlanderUser: SignerWithAddress
  coinlanderAddress = await seasonOne.COINLANDER()
  coinlanderUser = await ethers.getSigner(coinlanderAddress)

  // Emulate seizures
  let i = 0;
  while (seizureCount < seizes) {
    // Get stake needed
    seizureStake = await seasonOne.seizureStake()

    // Increment thru users
    let index = i % accounts.length
    user = accounts[index]

    // Mke sure we don't try and seize with it when running multiple emulations
    if (user.address === coinlanderAddress) {
      i++
      continue
    }
    await seasonOne.connect(user).seize({value: seizureStake})
    logger.pad(30, `Seizure ${seizureCount + 1}:`, user.address)

    // Immediately claim all
    if (seizureCount) {
      await seasonOne.connect(coinlanderUser).claimAll()
    }

    seizureCount = (await seasonOne.seizureCount()).toNumber()
    coinlanderUser = user
    coinlanderAddress = coinlanderUser.address
    i++

    // Check for any threshold events
    switch (seizureCount) {
      case firstSeekerMintThresh: {
        logger.out("First seeker mint thresh reached...", logger.Level.Info)
        currentPrice = await seekers.currentPrice()
        firstMintActive = await seekers.firstMintActive()
        logger.out("First seeker mint activated...", logger.Level.Info)
        break;
      }
      case secondSeekerMintThresh: {
        logger.out("Second seeker mint thresh reached...", logger.Level.Info)
        currentPrice = await seekers.currentPrice()
        secondMintActive = await seekers.firstMintActive()
        logger.out("Second seeker mint activated...", logger.Level.Info)
        break;
      }
      case thirdSeekerMintThresh: {
        logger.out("Third seeker mint thresh reached...", logger.Level.Info)
        currentPrice = await seekers.currentPrice()
        thirdMintActive = await seekers.firstMintActive()
        logger.out("Third seeker mint activated...", logger.Level.Info)
        break;
      }
      case uncloakingThresh: {
        logger.out("Uncloaking reached...", logger.Level.Info)
        uncloaking = await seekers.uncloaking()
        break;
      }
      case sweetRelease: {
        logger.out("Sweet release reached...", logger.Level.Info)
        released = await seasonOne.released()
        break;
      }
      default: {
        break;
      }
    }

    // First seeker thresh
    if (firstMintActive) {
      const currentBuyableSeekers = (await seekers.currentBuyableSeekers()).toNumber()
      if (currentBuyableSeekers > 1) {
        let currentPrice = await seekers.currentPrice()
        await seekers.connect(user).summonSeeker(1, {value: currentPrice})
        logger.pad(30, `Seeker summoned:`, user.address)
      }
    }

    // Trigger uncloaking actions after uncloak thresh
    if (uncloaking) {
      let userSeekerBalance = (await seekers.balanceOf(user.address)).toNumber() -1
      let lastToken = (await seekers.tokenOfOwnerByIndex(user.address, userSeekerBalance)).toNumber()
      await seekers.connect(user).uncloakSeeker(lastToken)
      logger.pad(30, `Seeker ${lastToken} unclocked:`, user.address)
    }
  }

  // TODO post-release validation here

  logger.divider()
  logger.out('Emulation complete!', logger.Level.Info)
  logger.divider()

}

export default emulate