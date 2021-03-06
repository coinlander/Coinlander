/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CoinOneInterface extends ethers.utils.Interface {
  functions: {
    "COINLANDER()": FunctionFragment;
    "FIRSTSEEKERMINTTHRESH()": FunctionFragment;
    "ONECOIN()": FunctionFragment;
    "PERCENTRATEINCREASE()": FunctionFragment;
    "PERCENTRESERVES()": FunctionFragment;
    "SECONDSEEKERMINTTHRESH()": FunctionFragment;
    "SHARD()": FunctionFragment;
    "SWEETRELEASE()": FunctionFragment;
    "THIRDSEEKERMINTTHRESH()": FunctionFragment;
    "UNCLOAKINGTHRESH()": FunctionFragment;
    "airdropShardPostRelease()": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "burnShardForFragments(uint256)": FunctionFragment;
    "burnShardForScale(uint256,uint256)": FunctionFragment;
    "claimAll()": FunctionFragment;
    "cloinDeposits(uint256)": FunctionFragment;
    "getPendingSeekerReward(address)": FunctionFragment;
    "getPendingShardReward(address)": FunctionFragment;
    "getPendingWithdrawl(address)": FunctionFragment;
    "getSeizureCount()": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerWithdraw()": FunctionFragment;
    "pendingWithdrawals(address)": FunctionFragment;
    "prize()": FunctionFragment;
    "released()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "seekers()": FunctionFragment;
    "seize()": FunctionFragment;
    "seizureStake()": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "stakeShardForCloin(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "COINLANDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIRSTSEEKERMINTTHRESH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ONECOIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PERCENTRATEINCREASE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERCENTRESERVES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SECONDSEEKERMINTTHRESH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SHARD", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SWEETRELEASE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "THIRDSEEKERMINTTHRESH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNCLOAKINGTHRESH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "airdropShardPostRelease",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burnShardForFragments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnShardForScale",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claimAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cloinDeposits",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingSeekerReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingShardReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingWithdrawl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSeizureCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingWithdrawals",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "prize", values?: undefined): string;
  encodeFunctionData(functionFragment: "released", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "seekers", values?: undefined): string;
  encodeFunctionData(functionFragment: "seize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "seizureStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeShardForCloin",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "COINLANDER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FIRSTSEEKERMINTTHRESH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ONECOIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PERCENTRATEINCREASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERCENTRESERVES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SECONDSEEKERMINTTHRESH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SHARD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "SWEETRELEASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "THIRDSEEKERMINTTHRESH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNCLOAKINGTHRESH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropShardPostRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnShardForFragments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnShardForScale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cloinDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingSeekerReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingShardReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingWithdrawl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSeizureCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seekers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "seizureStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeShardForCloin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Stolen(address,address,uint256)": EventFragment;
    "SweetRelease(address)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stolen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SweetRelease"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean] & {
    account: string;
    operator: string;
    approved: boolean;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type StolenEvent = TypedEvent<
  [string, string, BigNumber] & { by: string; from: string; bounty: BigNumber }
>;

export type SweetReleaseEvent = TypedEvent<[string] & { winner: string }>;

export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]] & {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
  }
>;

export type URIEvent = TypedEvent<
  [string, BigNumber] & { value: string; id: BigNumber }
>;

export class CoinOne extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CoinOneInterface;

  functions: {
    COINLANDER(overrides?: CallOverrides): Promise<[string]>;

    FIRSTSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<[BigNumber]>;

    ONECOIN(overrides?: CallOverrides): Promise<[BigNumber]>;

    PERCENTRATEINCREASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    PERCENTRESERVES(overrides?: CallOverrides): Promise<[BigNumber]>;

    SECONDSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<[BigNumber]>;

    SHARD(overrides?: CallOverrides): Promise<[BigNumber]>;

    SWEETRELEASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    THIRDSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<[BigNumber]>;

    UNCLOAKINGTHRESH(overrides?: CallOverrides): Promise<[BigNumber]>;

    airdropShardPostRelease(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    burnShardForFragments(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnShardForScale(
      seekerId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cloinDeposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        depositor: string;
        amount: BigNumber;
        timestamp: BigNumber;
      }
    >;

    getPendingSeekerReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPendingShardReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPendingWithdrawl(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSeizureCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerWithdraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _withdrawValue: BigNumber;
        _shardOwed: BigNumber;
        _seekersOwed: BigNumber;
      }
    >;

    prize(overrides?: CallOverrides): Promise<[BigNumber]>;

    released(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    seekers(overrides?: CallOverrides): Promise<[string]>;

    seize(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    seizureStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeShardForCloin(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  COINLANDER(overrides?: CallOverrides): Promise<string>;

  FIRSTSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

  ONECOIN(overrides?: CallOverrides): Promise<BigNumber>;

  PERCENTRATEINCREASE(overrides?: CallOverrides): Promise<BigNumber>;

  PERCENTRESERVES(overrides?: CallOverrides): Promise<BigNumber>;

  SECONDSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

  SHARD(overrides?: CallOverrides): Promise<BigNumber>;

  SWEETRELEASE(overrides?: CallOverrides): Promise<BigNumber>;

  THIRDSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

  UNCLOAKINGTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

  airdropShardPostRelease(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  burnShardForFragments(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnShardForScale(
    seekerId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAll(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cloinDeposits(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      depositor: string;
      amount: BigNumber;
      timestamp: BigNumber;
    }
  >;

  getPendingSeekerReward(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPendingShardReward(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPendingWithdrawl(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSeizureCount(overrides?: CallOverrides): Promise<BigNumber>;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerWithdraw(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pendingWithdrawals(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      _withdrawValue: BigNumber;
      _shardOwed: BigNumber;
      _seekersOwed: BigNumber;
    }
  >;

  prize(overrides?: CallOverrides): Promise<BigNumber>;

  released(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  seekers(overrides?: CallOverrides): Promise<string>;

  seize(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  seizureStake(overrides?: CallOverrides): Promise<BigNumber>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeShardForCloin(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    COINLANDER(overrides?: CallOverrides): Promise<string>;

    FIRSTSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

    ONECOIN(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTRATEINCREASE(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTRESERVES(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

    SHARD(overrides?: CallOverrides): Promise<BigNumber>;

    SWEETRELEASE(overrides?: CallOverrides): Promise<BigNumber>;

    THIRDSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

    UNCLOAKINGTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

    airdropShardPostRelease(overrides?: CallOverrides): Promise<void>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    burnShardForFragments(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    burnShardForScale(
      seekerId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimAll(overrides?: CallOverrides): Promise<void>;

    cloinDeposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        depositor: string;
        amount: BigNumber;
        timestamp: BigNumber;
      }
    >;

    getPendingSeekerReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingShardReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingWithdrawl(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSeizureCount(overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerWithdraw(overrides?: CallOverrides): Promise<void>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _withdrawValue: BigNumber;
        _shardOwed: BigNumber;
        _seekersOwed: BigNumber;
      }
    >;

    prize(overrides?: CallOverrides): Promise<BigNumber>;

    released(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    seekers(overrides?: CallOverrides): Promise<string>;

    seize(overrides?: CallOverrides): Promise<void>;

    seizureStake(overrides?: CallOverrides): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeShardForCloin(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ApprovalForAll(address,address,bool)"(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { account: string; operator: string; approved: boolean }
    >;

    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { account: string; operator: string; approved: boolean }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Stolen(address,address,uint256)"(
      by?: string | null,
      from?: string | null,
      bounty?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { by: string; from: string; bounty: BigNumber }
    >;

    Stolen(
      by?: string | null,
      from?: string | null,
      bounty?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { by: string; from: string; bounty: BigNumber }
    >;

    "SweetRelease(address)"(
      winner?: null
    ): TypedEventFilter<[string], { winner: string }>;

    SweetRelease(winner?: null): TypedEventFilter<[string], { winner: string }>;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber[], BigNumber[]],
      {
        operator: string;
        from: string;
        to: string;
        ids: BigNumber[];
        values: BigNumber[];
      }
    >;

    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber[], BigNumber[]],
      {
        operator: string;
        from: string;
        to: string;
        ids: BigNumber[];
        values: BigNumber[];
      }
    >;

    "TransferSingle(address,address,address,uint256,uint256)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        operator: string;
        from: string;
        to: string;
        id: BigNumber;
        value: BigNumber;
      }
    >;

    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        operator: string;
        from: string;
        to: string;
        id: BigNumber;
        value: BigNumber;
      }
    >;

    "URI(string,uint256)"(
      value?: null,
      id?: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { value: string; id: BigNumber }>;

    URI(
      value?: null,
      id?: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { value: string; id: BigNumber }>;
  };

  estimateGas: {
    COINLANDER(overrides?: CallOverrides): Promise<BigNumber>;

    FIRSTSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

    ONECOIN(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTRATEINCREASE(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTRESERVES(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

    SHARD(overrides?: CallOverrides): Promise<BigNumber>;

    SWEETRELEASE(overrides?: CallOverrides): Promise<BigNumber>;

    THIRDSEEKERMINTTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

    UNCLOAKINGTHRESH(overrides?: CallOverrides): Promise<BigNumber>;

    airdropShardPostRelease(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnShardForFragments(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnShardForScale(
      seekerId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cloinDeposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingSeekerReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingShardReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingWithdrawl(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSeizureCount(overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerWithdraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    prize(overrides?: CallOverrides): Promise<BigNumber>;

    released(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    seekers(overrides?: CallOverrides): Promise<BigNumber>;

    seize(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    seizureStake(overrides?: CallOverrides): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeShardForCloin(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    COINLANDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FIRSTSEEKERMINTTHRESH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ONECOIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERCENTRATEINCREASE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PERCENTRESERVES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SECONDSEEKERMINTTHRESH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SHARD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SWEETRELEASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    THIRDSEEKERMINTTHRESH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UNCLOAKINGTHRESH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    airdropShardPostRelease(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnShardForFragments(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnShardForScale(
      seekerId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cloinDeposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingSeekerReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingShardReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingWithdrawl(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSeizureCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerWithdraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    released(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    seekers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seize(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    seizureStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeShardForCloin(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uri(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
