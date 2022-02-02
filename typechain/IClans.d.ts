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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IClansInterface extends ethers.utils.Interface {
  functions: {
    "allMembers()": FunctionFragment;
    "characterMembers()": FunctionFragment;
    "declaredItems(address,uint256,uint256[])": FunctionFragment;
    "isClan()": FunctionFragment;
    "returnURI()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allMembers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "characterMembers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "declaredItems",
    values: [string, BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "isClan", values?: undefined): string;
  encodeFunctionData(functionFragment: "returnURI", values?: undefined): string;

  decodeFunctionResult(functionFragment: "allMembers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "characterMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "declaredItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "returnURI", data: BytesLike): Result;

  events: {};
}

export class IClans extends BaseContract {
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

  interface: IClansInterface;

  functions: {
    allMembers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    characterMembers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    declaredItems(
      itemContract: string,
      itemType: BigNumberish,
      itemIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isClan(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnURI(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allMembers(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  characterMembers(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  declaredItems(
    itemContract: string,
    itemType: BigNumberish,
    itemIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isClan(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnURI(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allMembers(overrides?: CallOverrides): Promise<string[]>;

    characterMembers(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber[]] & { characterContract: string }>;

    declaredItems(
      itemContract: string,
      itemType: BigNumberish,
      itemIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    isClan(overrides?: CallOverrides): Promise<boolean>;

    returnURI(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    allMembers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    characterMembers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    declaredItems(
      itemContract: string,
      itemType: BigNumberish,
      itemIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isClan(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnURI(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allMembers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    characterMembers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    declaredItems(
      itemContract: string,
      itemType: BigNumberish,
      itemIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isClan(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnURI(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
