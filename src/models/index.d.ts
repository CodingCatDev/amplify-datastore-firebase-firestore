import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class FvDRoom {
  readonly id: string;
  readonly name: string;
  readonly users?: FvDUser[];
  constructor(init: ModelInit<FvDRoom>);
  static copyOf(source: FvDRoom, mutator: (draft: MutableModel<FvDRoom>) => MutableModel<FvDRoom> | void): FvDRoom;
}

export declare class FvDUser {
  readonly id: string;
  readonly roomID: string;
  readonly expression?: string[];
  readonly last_changed?: string;
  constructor(init: ModelInit<FvDUser>);
  static copyOf(source: FvDUser, mutator: (draft: MutableModel<FvDUser>) => MutableModel<FvDUser> | void): FvDUser;
}