/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface MasterContractsRegistryInterface extends utils.Interface {
  functions: {
    "CONSTANTS_REGISTRY_NAME()": FunctionFragment;
    "MASTER_ACCESS_MANAGEMENT_NAME()": FunctionFragment;
    "REVIEWABLE_REQUESTS_NAME()": FunctionFragment;
    "__MasterContractsRegistry_init(address)": FunctionFragment;
    "addContract(string,address)": FunctionFragment;
    "addProxyContract(string,address)": FunctionFragment;
    "getConstantsRegistry()": FunctionFragment;
    "getContract(string)": FunctionFragment;
    "getImplementation(string)": FunctionFragment;
    "getMasterAccessManagement()": FunctionFragment;
    "getProxyUpgrader()": FunctionFragment;
    "getReviewableRequests()": FunctionFragment;
    "hasContract(string)": FunctionFragment;
    "injectDependencies(string)": FunctionFragment;
    "justAddProxyContract(string,address)": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "removeContract(string)": FunctionFragment;
    "upgradeContract(string,address)": FunctionFragment;
    "upgradeContractAndCall(string,address,bytes)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CONSTANTS_REGISTRY_NAME"
      | "MASTER_ACCESS_MANAGEMENT_NAME"
      | "REVIEWABLE_REQUESTS_NAME"
      | "__MasterContractsRegistry_init"
      | "addContract"
      | "addProxyContract"
      | "getConstantsRegistry"
      | "getContract"
      | "getImplementation"
      | "getMasterAccessManagement"
      | "getProxyUpgrader"
      | "getReviewableRequests"
      | "hasContract"
      | "injectDependencies"
      | "justAddProxyContract"
      | "proxiableUUID"
      | "removeContract"
      | "upgradeContract"
      | "upgradeContractAndCall"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CONSTANTS_REGISTRY_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MASTER_ACCESS_MANAGEMENT_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REVIEWABLE_REQUESTS_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__MasterContractsRegistry_init",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addProxyContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getConstantsRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getContract", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMasterAccessManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyUpgrader",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReviewableRequests",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hasContract", values: [string]): string;
  encodeFunctionData(
    functionFragment: "injectDependencies",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "justAddProxyContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeContractAndCall",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "CONSTANTS_REGISTRY_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MASTER_ACCESS_MANAGEMENT_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REVIEWABLE_REQUESTS_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__MasterContractsRegistry_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addProxyContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConstantsRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMasterAccessManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyUpgrader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReviewableRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "injectDependencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "justAddProxyContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeContractAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AddedContract(string,address,bool)": EventFragment;
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "RemovedContract(string)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AddedContractEventObject {
  name: string;
  contractAddress: string;
  isProxy: boolean;
}
export type AddedContractEvent = TypedEvent<
  [string, string, boolean],
  AddedContractEventObject
>;

export type AddedContractEventFilter = TypedEventFilter<AddedContractEvent>;

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface RemovedContractEventObject {
  name: string;
}
export type RemovedContractEvent = TypedEvent<
  [string],
  RemovedContractEventObject
>;

export type RemovedContractEventFilter = TypedEventFilter<RemovedContractEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface MasterContractsRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MasterContractsRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CONSTANTS_REGISTRY_NAME(overrides?: CallOverrides): Promise<[string]>;

    MASTER_ACCESS_MANAGEMENT_NAME(overrides?: CallOverrides): Promise<[string]>;

    REVIEWABLE_REQUESTS_NAME(overrides?: CallOverrides): Promise<[string]>;

    __MasterContractsRegistry_init(
      masterAccess_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    addContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    addProxyContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getConstantsRegistry(overrides?: CallOverrides): Promise<[string]>;

    getContract(name: string, overrides?: CallOverrides): Promise<[string]>;

    getImplementation(
      name: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMasterAccessManagement(overrides?: CallOverrides): Promise<[string]>;

    getProxyUpgrader(overrides?: CallOverrides): Promise<[string]>;

    getReviewableRequests(overrides?: CallOverrides): Promise<[string]>;

    hasContract(name: string, overrides?: CallOverrides): Promise<[boolean]>;

    injectDependencies(
      name_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    justAddProxyContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    removeContract(
      name_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeContract(
      name_: string,
      newImplementation_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeContractAndCall(
      name_: string,
      newImplementation_: string,
      data_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  CONSTANTS_REGISTRY_NAME(overrides?: CallOverrides): Promise<string>;

  MASTER_ACCESS_MANAGEMENT_NAME(overrides?: CallOverrides): Promise<string>;

  REVIEWABLE_REQUESTS_NAME(overrides?: CallOverrides): Promise<string>;

  __MasterContractsRegistry_init(
    masterAccess_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  addContract(
    name_: string,
    contractAddress_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  addProxyContract(
    name_: string,
    contractAddress_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getConstantsRegistry(overrides?: CallOverrides): Promise<string>;

  getContract(name: string, overrides?: CallOverrides): Promise<string>;

  getImplementation(name: string, overrides?: CallOverrides): Promise<string>;

  getMasterAccessManagement(overrides?: CallOverrides): Promise<string>;

  getProxyUpgrader(overrides?: CallOverrides): Promise<string>;

  getReviewableRequests(overrides?: CallOverrides): Promise<string>;

  hasContract(name: string, overrides?: CallOverrides): Promise<boolean>;

  injectDependencies(
    name_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  justAddProxyContract(
    name_: string,
    contractAddress_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  removeContract(
    name_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeContract(
    name_: string,
    newImplementation_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeContractAndCall(
    name_: string,
    newImplementation_: string,
    data_: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONSTANTS_REGISTRY_NAME(overrides?: CallOverrides): Promise<string>;

    MASTER_ACCESS_MANAGEMENT_NAME(overrides?: CallOverrides): Promise<string>;

    REVIEWABLE_REQUESTS_NAME(overrides?: CallOverrides): Promise<string>;

    __MasterContractsRegistry_init(
      masterAccess_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addContract(
      name_: string,
      contractAddress_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addProxyContract(
      name_: string,
      contractAddress_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getConstantsRegistry(overrides?: CallOverrides): Promise<string>;

    getContract(name: string, overrides?: CallOverrides): Promise<string>;

    getImplementation(name: string, overrides?: CallOverrides): Promise<string>;

    getMasterAccessManagement(overrides?: CallOverrides): Promise<string>;

    getProxyUpgrader(overrides?: CallOverrides): Promise<string>;

    getReviewableRequests(overrides?: CallOverrides): Promise<string>;

    hasContract(name: string, overrides?: CallOverrides): Promise<boolean>;

    injectDependencies(name_: string, overrides?: CallOverrides): Promise<void>;

    justAddProxyContract(
      name_: string,
      contractAddress_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    removeContract(name_: string, overrides?: CallOverrides): Promise<void>;

    upgradeContract(
      name_: string,
      newImplementation_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeContractAndCall(
      name_: string,
      newImplementation_: string,
      data_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddedContract(string,address,bool)"(
      name?: null,
      contractAddress?: null,
      isProxy?: null
    ): AddedContractEventFilter;
    AddedContract(
      name?: null,
      contractAddress?: null,
      isProxy?: null
    ): AddedContractEventFilter;

    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "RemovedContract(string)"(name?: null): RemovedContractEventFilter;
    RemovedContract(name?: null): RemovedContractEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    CONSTANTS_REGISTRY_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    MASTER_ACCESS_MANAGEMENT_NAME(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    REVIEWABLE_REQUESTS_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    __MasterContractsRegistry_init(
      masterAccess_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    addContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    addProxyContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getConstantsRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getContract(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    getImplementation(
      name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMasterAccessManagement(overrides?: CallOverrides): Promise<BigNumber>;

    getProxyUpgrader(overrides?: CallOverrides): Promise<BigNumber>;

    getReviewableRequests(overrides?: CallOverrides): Promise<BigNumber>;

    hasContract(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    injectDependencies(
      name_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    justAddProxyContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    removeContract(
      name_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeContract(
      name_: string,
      newImplementation_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeContractAndCall(
      name_: string,
      newImplementation_: string,
      data_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONSTANTS_REGISTRY_NAME(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MASTER_ACCESS_MANAGEMENT_NAME(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REVIEWABLE_REQUESTS_NAME(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    __MasterContractsRegistry_init(
      masterAccess_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addProxyContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getConstantsRegistry(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContract(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getImplementation(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMasterAccessManagement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProxyUpgrader(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReviewableRequests(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasContract(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    injectDependencies(
      name_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    justAddProxyContract(
      name_: string,
      contractAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeContract(
      name_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeContract(
      name_: string,
      newImplementation_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeContractAndCall(
      name_: string,
      newImplementation_: string,
      data_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
