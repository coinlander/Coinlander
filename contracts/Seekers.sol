// SPDX-License-Identifier: UNLICENSED
// Author: @stevieraykatz
// https://github.com/coinlander/Coinlander

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./interfaces/iSeekers.sol";
//import "hardhat/console.sol";

contract Seekers is ERC721Enumerable, iSeekers, AccessControl, ReentrancyGuard {
  // Access control setup
  bytes32 public constant KEEPERS_ROLE = keccak256("KEEPERS_ROLE"); // Role for Keepers
  bytes32 public constant GAME_ROLE = keccak256("GAME_ROLE"); // Role for approved Coinlander game contracts

  // Counter inits
  uint256 private _summonSeekerId = 0; // Sale id tracker
  uint256 private _birthSeekerId = 0; // Internal id tracker

  // Minting params
  uint256 public constant MAXSEEKERS = 11111; 
  uint256 public currentBuyableSeekers = 0;
  uint256 public currentPrice = 0;
  uint256 private reserve = 0; // Contracts treasury balance
  uint256 private constant KEEPERSEEKERS = 64; // Number of Seekers that Keepers can mint for themselves
  uint256 private keepersSeekersMinted = 0;
  uint256 public constant MAXMINTABLE = 10; // Max seekers that can be purchased in one tx

  // Seeker release schedule
  // Activation for each will be called externally by the season 1 Coinlander contract
  uint256 public constant FIRSTMINT = 5000;
  bool public firstMintActive = false;
  uint256 public constant FIRSTMINTPRICE = 0.00002 ether; // test value
  // uint256 public constant FIRSTMINTPRICE = 0.02 ether;
  uint256 public constant SECONDMINT = 3333;
  bool public secondMintActive = false;
  uint256 public constant SECONDMINTPRICE = 0.00005 ether; // test value
  // uint256 public constant SECONDMINTPRICE = 0.05 ether;
  uint256 public constant THIRDMINT = 267; // bulk release at third mint thresh 
  uint256 public constant THIRDMINT_INCR = 4; // additional release at each seizure after third mint thresh 
  uint256 public constant THIRDMINT_TOTAL = 1603; // total number of seekers released via third mint 
  bool public thirdMintActive = false;
  uint256 public constant THIRDMINTPRICE = 0.0001 ether; // test value
  // uint256 public constant THIRDMINTPRICE = 0.1 ether;

  // Game params
  bool public evilsOnly = false; 
  bool public goodsOnly = false; 

  // This adds 2 because we are minting the winner_id = 1 and ids need to be 1 indexed
  uint256 private constant INTERNALIDOFFSET = FIRSTMINT + SECONDMINT + THIRDMINT_TOTAL + KEEPERSEEKERS + 2;

  // On-chain game parameters
  bool public released = false;
  bool public uncloaking = false;
  uint16 public constant MAXPOWER = 1024; // 32x32 pixel grid
  uint16 public constant SUMMONSEEKERPOWERSTART = 3;
  uint16 public constant BIRTHSEEKERPOWERSTART = 5;
  uint16 public constant DETHSCALEREROLLCOST = 1;
  mapping(uint256 => bool) isSeekerCloaked;

  struct Attributes { 
    string alignment;
    bool bornFromCoin;
    uint8 alpha;
    uint8 beta;
    uint8 delta;
    uint8 gamma;
    uint16 power;
    uint16 dethscales;
    address clan;
  }

  mapping(uint256 => Attributes) attributesBySeekerId;

  // Off-chain metadata
  // @todo need to put a valid endpoint here 
  string private _baseTokenURI = "https://meta.coinlander.one/seekers/";

  // Alignment
  string[] private alignments = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil"
  ];

  constructor() ERC721("Seekers", "SEEK") {
    // Give the Keeper deploying this contract the Keeper role and set them as admin
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _setupRole(KEEPERS_ROLE, msg.sender);
    _setRoleAdmin(KEEPERS_ROLE, DEFAULT_ADMIN_ROLE);

    _summonSeekerId += 1;
    _safeMint(msg.sender, _summonSeekerId); // Set aside id 1 for Season 1 winner

    _birthSeekerId = INTERNALIDOFFSET;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                              //
  //                                  MINTING AND SUCH                                            //
  //                                                                                              //
  //////////////////////////////////////////////////////////////////////////////////////////////////

  function summonSeeker(uint256 summonCount) external payable nonReentrant {
    require(summonCount > 0 && summonCount <= MAXMINTABLE, "E001");
    require(msg.value >= (currentPrice * summonCount), "E002");
    require((_summonSeekerId + summonCount) <= currentBuyableSeekers, "E003");

    for (uint256 i = 0; i < summonCount; i++) {
        _summonSeekerId += 1;
        _mintSeeker(msg.sender, _summonSeekerId, false);
    }
  }

  function birthSeeker(address to) external onlyGame returns (uint256) {
    require(_birthSeekerId < MAXSEEKERS, "E003");
    _birthSeekerId += 1;
    _mintSeeker(to, _birthSeekerId, true);
    return (_birthSeekerId);
  }

  function keepersSummonSeeker(uint256 summonCount) external nonReentrant onlyKeepers {
    require ((keepersSeekersMinted + summonCount) <= KEEPERSEEKERS, "E004");
    require((_summonSeekerId + summonCount) <= currentBuyableSeekers, "E003");
    keepersSeekersMinted += summonCount;

    for (uint256 i = 0; i < summonCount; i++) {
        _summonSeekerId += 1;
        _mintSeeker(msg.sender, _summonSeekerId, false);
    }
  }

  function _mintSeeker(address to,	uint256 id,	bool bornFromCoin) internal {

    // Born from coin grants more power
    uint16 power = SUMMONSEEKERPOWERSTART;
    if (bornFromCoin) {
      power = BIRTHSEEKERPOWERSTART;
    }
    
    // Initialize all attributes to "hidden" values
    Attributes memory cloakedAttributes = Attributes(
        "",
        bornFromCoin,
        0,
        0,
        0,
        0,
        power,
        uint16(0),
        address(0)
    ); 
    
    attributesBySeekerId[id] = cloakedAttributes;

    isSeekerCloaked[id] = true; // All Seekers begin cloaked

    _safeMint(to, id);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                              //
  //                             EXTERNALLY CALLABLE GAME EVENTS                                  //
  //                                                                                              //
  //////////////////////////////////////////////////////////////////////////////////////////////////

  function activateFirstMint() external onlyGame {
    require(firstMintActive == false, "E005");
    firstMintActive = true;
    emit FirstMintActivated();
    currentBuyableSeekers += (FIRSTMINT + KEEPERSEEKERS);
    currentPrice = FIRSTMINTPRICE;
  }

  function activateSecondMint() external onlyGame {
    require(secondMintActive == false, "E006");
    secondMintActive = true;
    evilsOnly = true;
    emit SecondMintActivated();
    currentBuyableSeekers += SECONDMINT;
    currentPrice = SECONDMINTPRICE;
  }

  function activateThirdMint() external onlyGame {
    require(thirdMintActive == false, "E007");
    thirdMintActive = true;
    evilsOnly = false;
    goodsOnly = true;
    emit ThirdMintActivated();
    currentBuyableSeekers += THIRDMINT_INCR + THIRDMINT;
    currentPrice = THIRDMINTPRICE;
  }

  function seizureMintIncrement() external onlyGame {
    currentBuyableSeekers += THIRDMINT_INCR;
  }

  function endGoodsOnly() external onlyGame {
    goodsOnly = false;
  }

  function performUncloaking() external onlyGame {
    uncloaking = true;
    emit UncloakingAvailable();
  }

  function sendWinnerSeeker(address winner) external onlyGame {
    require(released == false, "E008");
    released = true;
    _setWinnerSeekerAttributes(1);
    _transfer(ownerOf(1), winner, 1);
  }



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                              //
  //                           EXTERNALLY CALLABLE PLAYER ACTIONS                                 //
  //                                                                                              //
  //////////////////////////////////////////////////////////////////////////////////////////////////

  function uncloakSeeker(uint256 id) external {
    require(uncloaking, "E009");
    require(msg.sender == ownerOf(id), "E010");
    require(isSeekerCloaked[id], "E011");

    string memory _alignment = _getAlignment();

    uint8[4] memory _APs = _getAP(id);

    isSeekerCloaked[id] = false; // Uncloaks the Seeker permanently

    Attributes memory revealedAttributes = Attributes(
        _alignment, // Sets the alignment
        attributesBySeekerId[id].bornFromCoin, // Dont change how the Seeker was created
        _APs[0], // Alpha
        _APs[1], // Beta
        _APs[2], // Detla
        _APs[3], // Gamma
        attributesBySeekerId[id].power,
        uint16(0),
        attributesBySeekerId[id].clan
      ); 
    attributesBySeekerId[id] = revealedAttributes;

    uint16 _dethscales = _getDethscales(id, false);
    attributesBySeekerId[id].dethscales = _dethscales;

    emit SeekerUncloaked(id);
  }

  function rerollDethscales(uint256 id) external {
    require(uncloaking, "E009");
    require(msg.sender == ownerOf(id), "E010");
    require(!isSeekerCloaked[id], "E012");
    require(attributesBySeekerId[id].power >= DETHSCALEREROLLCOST, "E013");

    _burnPower(id, DETHSCALEREROLLCOST);
    // attributesBySeekerId[id].power -= DETHSCALEREROLLCOST;
    attributesBySeekerId[id].dethscales = _getDethscales(id, true);

    emit DethscalesRerolled(id);
  }

  function addPower(uint256 id, uint256 power) external onlyGame {
    require(ownerOf(id) != address(0), "E014");
    require(power > 0, "E015");
    uint16 _power = attributesBySeekerId[id].power;
    if ((_power + power) >  MAXPOWER) {
        attributesBySeekerId[id].power = MAXPOWER;
    }
    else {
        attributesBySeekerId[id].power += uint16(power);
    }
    emit PowerAdded(id, power, attributesBySeekerId[id].power);
  }

  function burnPower(uint256 id, uint16 powerToBurn) external onlyGame {
    require(ownerOf(id) != address(0), "E014");
    require(ownerOf(id) == tx.origin, "E010");
    require(powerToBurn >= attributesBySeekerId[id].power, "E021");
    _burnPower(id, powerToBurn);
  }

  function _burnPower(uint256 id, uint16 powerToBurn) internal {
    attributesBySeekerId[id].power -= powerToBurn;
  }

  function declareForClan(uint id, address clanAddress) external {
    require(msg.sender == ownerOf(id), "E010");
    require(clanAddress == address(clanAddress), "E016");

    attributesBySeekerId[id].clan = clanAddress;
    emit SeekerDeclaredToClan(id,clanAddress);
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                              //
  //                                  INTERNAL ATTRIBUTES AND METADATA                            //
  //                                                                                              //
  //////////////////////////////////////////////////////////////////////////////////////////////////

  function _baseURI() internal view override returns (string memory) {
    return _baseTokenURI;
  }

  function setBaseURI(string memory baseTokenURI) public onlyKeepers {
    _baseTokenURI = baseTokenURI;
  }

  function _getAlignment() internal view returns (string memory) {
    if(goodsOnly) {
      string[] memory goodAlignments = new string[](3);
      goodAlignments[0] = alignments[0];
      goodAlignments[1] = alignments[1];
      goodAlignments[2] = alignments[2];
      return _pluck(3, goodAlignments);
    }
    if(evilsOnly) {
      string[] memory evilAlignments = new string[](3);
      evilAlignments[0] = alignments[6];
      evilAlignments[1] = alignments[7];
      evilAlignments[2] = alignments[8];
      return _pluck(3, evilAlignments);
    }
    return _pluck(alignments.length, alignments);
  }

  // Alignment axes are defined as a tuple which describes where on the 3x3 square the alignment lands
  // Good -> Evil :: 0 -> 2
  // Lawful -> Chaotic :: 0 -> 2
  function _getAlignmentAxes(uint256 id) internal view returns (uint256, uint256) {
    string memory seekerAlignment = attributesBySeekerId[id].alignment;
    string memory _alignment;
    for(uint256 i = 0; i < alignments.length; i++) {
      _alignment = alignments[i];
      if(keccak256(bytes(seekerAlignment)) == keccak256(bytes(_alignment))) {
        return ((i/3),(i % 3));
      }
    }
    return (0,0); // Default if alignment not set
  }

  function _getAP(uint256 id) internal view returns (uint8[4] memory) {
    uint256 minSingle = 10;
    uint256 maxSingle = 23;
    uint8 minSum = 50;

    // Those born from the Coin are deterministically stronger 
    if (attributesBySeekerId[id].bornFromCoin) {
      minSingle = 15; 
      maxSingle = 25; 
    }

    // Determine 4 random attribute points
    uint256 rangeSingle = maxSingle - minSingle + 1;
    uint8 ap1 = uint8(minSingle + _getRandomNumber(rangeSingle, 0));
    uint8 ap2 = uint8(minSingle + _getRandomNumber(rangeSingle, 1));
    uint8 ap3 = uint8(minSingle + _getRandomNumber(rangeSingle, 2));
    uint8 ap4 = uint8(minSingle + _getRandomNumber(rangeSingle, 3));

    // // Set power floor
    uint8 sum = ap1 + ap2 + ap3 + ap4;
    uint8[4] memory aps = [ap1, ap2, ap3, ap4];
    if (sum < minSum) {
      uint8 diff = minSum - sum;
      uint8 idx = _getMinIdx(aps);
      aps[idx] += diff;
    }

    // Shuffle them
    for (uint256 i = 0; i < aps.length; i++) {
        uint256 n = i + uint256(keccak256(abi.encodePacked(block.timestamp))) % (aps.length -i);
        uint8 temp = aps[n];
        aps[n] = aps[i];
        aps[i] = temp;
    }

    return aps;
  }

  function _getDethscales(uint256 _id, bool reroll) internal view returns (uint16) {

    // Set fill density based on alignment 
    (uint256 x, ) = _getAlignmentAxes(_id); // Only need good/evil axis
    uint16 minDethscales;
    uint16 maxDethscales;
    if(x ==1) {
      minDethscales = 7; // Neutral case
      maxDethscales = 12;
    }
    else{
      minDethscales = 4; // Good and Evil cases
      maxDethscales = 8;
    }

    uint16 _dethscales;
    uint16 move;
    uint16 range = maxDethscales - minDethscales;
    uint16 rand = reroll ? 
      attributesBySeekerId[_id].dethscales : // use old dethscales if rerolling
      uint16(_getRandomNumber(2**16, _id));  // generate new scale pattern
    uint16 segBits = _getRandomNumber16(range, uint16(_id), rand) + minDethscales;

    for(uint16 i = 0; i < segBits; i++) {
        move = _getRandomNumber16(16, i, rand);
        _dethscales = (uint16(2) ** move) | _dethscales;
    }

    uint16 rarityFlip = uint16(_getRandomNumber(100, rand));

    if(x==2){
      if(rarityFlip <= 5 && !reroll){ // dont change rarity on reroll
        return _dethscales; // dont invert for rare evil
      }
      else {
        return ~_dethscales; // Invert for Evil
      }
    }
    if(x==0) {
      if(rarityFlip <= 5 && !reroll) { // dont change rarity on reroll 
        return ~_dethscales; // invert for rare good
      }
      else{
        return _dethscales;
      }
    }
    else {
      return _dethscales;
    }
  }
 
  function _setWinnerSeekerAttributes(uint256 id) internal {
    isSeekerCloaked[id] = false; // Uncloaks the Seeker permanently
    Attributes memory winningAttributes = Attributes(
        "True Neutral",
        true,
        25, // Alpha
        25, // Beta
        25, // Detla
        25, // Gamma
        MAXPOWER,
        uint16(0),
        attributesBySeekerId[id].clan
      ); 
    attributesBySeekerId[id] = winningAttributes;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                              //
  //                                  EXTERNAL ATTRIBUTES AND METADATA                            //
  //                                                                                              //
  //////////////////////////////////////////////////////////////////////////////////////////////////

  function getBirthStatusById(uint256 id) external view returns (bool) {
    return attributesBySeekerId[id].bornFromCoin;
  }

  function getAlignmentById(uint256 id) external view returns (string memory) {
    string memory _alignment = attributesBySeekerId[id].alignment;
    return _alignment;
  }

  function getApById(uint256 id) external view returns (uint8[4] memory) {
    uint8[4] memory _aps = [
        attributesBySeekerId[id].alpha,
        attributesBySeekerId[id].beta,
        attributesBySeekerId[id].gamma,
        attributesBySeekerId[id].delta
        ];
    return _aps;
  }

  function getPowerById(uint256 id) external view returns (uint16) {
    return attributesBySeekerId[id].power;
  }

  function getClanById(uint256 id) external view returns (address) {
    return attributesBySeekerId[id].clan;
  }

  function getDethscalesById(uint256 id) external view returns (uint16) {
    return attributesBySeekerId[id].dethscales;
  }

  function getCloakStatusById(uint256 id) external view returns (bool) {
    return isSeekerCloaked[id];
  }

  function getFullCloak(uint256 id) external view returns (uint32[32] memory) {
    require(!isSeekerCloaked[id], "E012");
    uint16 _dethscales = attributesBySeekerId[id].dethscales;

    // Set noise based on alignment
    ( ,uint256 y) = _getAlignmentAxes(id); // Only need lawful/chaotic axis
    uint16 minNoiseBits;
    uint16 maxNoiseBits;
    if ( y == 0) { // Lawful
      minNoiseBits = 0;
      maxNoiseBits = 16;
    }
    if (y == 1) { // Neutral
      minNoiseBits = 16;
      maxNoiseBits = 32;
    }
    else { // Chaotic
      minNoiseBits = 32;
      maxNoiseBits = 64;
    }

    uint32[32] memory fullCloak;
    // Because solidity doesn't have a native way to handle 4-bit values, 
    // we construct an entire row out of each primitive
    //
    // EXAMPLE
    // uint16 dethscale = 1001 0110 1100 0001
    //
    //  Primitives:
    //   r1'  r2'  r3'  r4'
    //  1001 0110 1100 0001
    // 
    //  Full Rows: 
    // uint32 r1 = 1001 1001 ,,, 1001 
    // uint32 r2 = 0110 0110 ,,, 0110 
    // uint32 r3 = 1100 1100 ,,, 1100
    // uint32 r4 = 0001 0001 ,,, 0001

    uint32 input = uint32(_dethscales);
    uint32[4] memory rows;

    // r1
    rows[0] = (input >> 12) | 
      ((input >> 12) << 4) | 
      ((input >> 12) << 8) | 
      ((input >> 12) << 12) |
      ((input >> 12) << 16) |
      ((input >> 12) << 20) |
      ((input >> 12) << 24) |
      ((input >> 12) << 28);

    // r2
    rows[1] = (0xF & (input >> 8)) | 
      ((0xF & (input >> 8)) << 4) | 
      ((0xF & (input >> 8)) << 8) | 
      ((0xF & (input >> 8)) << 12) |
      ((0xF & (input >> 8)) << 16) |
      ((0xF & (input >> 8)) << 20) |
      ((0xF & (input >> 8)) << 24) |
      ((0xF & (input >> 8)) << 28);

    // r3
    rows[2] = (0xF & (input >> 4)) | 
      ((0xF & (input >> 4)) << 4) | 
      ((0xF & (input >> 4)) << 8) | 
      ((0xF & (input >> 4)) << 12) |
      ((0xF & (input >> 4)) << 16) |
      ((0xF & (input >> 4)) << 20) |
      ((0xF & (input >> 4)) << 24) |
      ((0xF & (input >> 4)) << 28);
    
    // r4
    rows[3] = (0xF & input) | 
      ((0xF & input) << 4) | 
      ((0xF & input) << 8) | 
      ((0xF & input) << 12) |
      ((0xF & input) << 16) |
      ((0xF & input) << 20) |
      ((0xF & input) << 24) |
      ((0xF & input) << 28);

    // Build full cloak from rows 
    for(uint16 i = 0; i < fullCloak.length; i++) {
        fullCloak[i] = rows[i % 4]; 
    }
    // Deterministically add noise 
    uint16 noiseBits = _getRandomNumber16((maxNoiseBits - minNoiseBits), _dethscales, maxNoiseBits) + minNoiseBits;
    for (uint16 i = 0; i < noiseBits; i++) {
      uint16 noiseCol = _getRandomNumber16(32, _dethscales, i);
      uint16 noiseRow = _getRandomNumber16(32, noiseCol, i);
      fullCloak[noiseRow] = (uint32(2) ** noiseCol) ^ fullCloak[noiseRow];
    }
    return fullCloak;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                              //
  //                                  PSEUDORANDOMNESS & MAFS                                     //
  //                                                                                              //
  //////////////////////////////////////////////////////////////////////////////////////////////////

  // Thanks Manny - entropy is a bitch
  function _getRandomNumber(uint256 mod, uint256 r) private view returns (uint256) {
    uint256 random = uint256(
      keccak256(
        abi.encodePacked(
          blockhash(block.number - 1),
          block.coinbase,
          block.difficulty,
          msg.sender,
          mod,
          r
        )
      )
    );

    return random % mod;
  }

  // Deterministic "random" number picker - used for generating full cloak artwork the same every time
  // while still enabling the injection of randomly assigned noise.
  function _getRandomNumber16(uint16 mod, uint16 r1, uint16 r2) public pure returns (uint16) {
    uint16 seed = uint16(bytes2(keccak256(abi.encodePacked(r1, r2))));
    return seed % mod;
  }

  function _pluck(uint256 mod, string[] memory sourceArray) internal view returns (string memory) {
    uint256 rand = _getRandomNumber(mod,0);
    string memory output = sourceArray[rand % sourceArray.length];
    return output;
  }

  function _getMinIdx(uint8[4] memory vals) internal pure returns (uint8) {
    uint8 minIdx;
    for (uint8 i; i<3; i++) {
      if (vals[i] < vals[minIdx]) {
        minIdx = i;
      }
    }
    return minIdx;
  } 

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                              //
  //                                ACCESS CONTROL/PERMISSIONS                                    //
  //                                                                                              //
  //////////////////////////////////////////////////////////////////////////////////////////////////

  modifier onlyGame() {
    require(
      hasRole(GAME_ROLE, msg.sender), "E017");
    _;
  }

  modifier onlyKeepers() {
    require(
      hasRole(KEEPERS_ROLE, msg.sender), "E018");
    _;
  }

  function ownerWithdraw() external payable onlyKeepers{
    require(reserve > 0, "E019");
    uint256 amount = reserve;
    reserve = 0;
    (bool success, ) = msg.sender.call{value:amount}("");
    require(success, "E020");
  }

  function addGameContract(address gameContract) public onlyKeepers {
    grantRole(GAME_ROLE, gameContract);
  }

  function addKeeper(address newKeeper) public onlyKeepers {
    grantRole(KEEPERS_ROLE, newKeeper);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(IERC165, ERC721Enumerable, AccessControl)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  receive() external payable {
    revert("E020");
  }
}