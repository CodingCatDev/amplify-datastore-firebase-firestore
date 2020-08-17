/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateFvDRoomInput = {
  id?: string | null;
  name: string;
  _version?: number | null;
};

export type ModelFvDRoomConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelFvDRoomConditionInput | null> | null;
  or?: Array<ModelFvDRoomConditionInput | null> | null;
  not?: ModelFvDRoomConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateFvDRoomInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
};

export type DeleteFvDRoomInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateFvDUserInput = {
  id?: string | null;
  roomID: string;
  expression?: Array<string | null> | null;
  last_changed?: string | null;
  _version?: number | null;
};

export type ModelFvDUserConditionInput = {
  roomID?: ModelIDInput | null;
  expression?: ModelStringInput | null;
  last_changed?: ModelStringInput | null;
  and?: Array<ModelFvDUserConditionInput | null> | null;
  or?: Array<ModelFvDUserConditionInput | null> | null;
  not?: ModelFvDUserConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateFvDUserInput = {
  id: string;
  roomID?: string | null;
  expression?: Array<string | null> | null;
  last_changed?: string | null;
  _version?: number | null;
};

export type DeleteFvDUserInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelFvDRoomFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelFvDRoomFilterInput | null> | null;
  or?: Array<ModelFvDRoomFilterInput | null> | null;
  not?: ModelFvDRoomFilterInput | null;
};

export type ModelFvDUserFilterInput = {
  id?: ModelIDInput | null;
  roomID?: ModelIDInput | null;
  expression?: ModelStringInput | null;
  last_changed?: ModelStringInput | null;
  and?: Array<ModelFvDUserFilterInput | null> | null;
  or?: Array<ModelFvDUserFilterInput | null> | null;
  not?: ModelFvDUserFilterInput | null;
};

export type CreateFvDRoomMutation = {
  __typename: "FvDRoom";
  id: string;
  name: string;
  users: {
    __typename: "ModelFvDUserConnection";
    items: Array<{
      __typename: "FvDUser";
      id: string;
      roomID: string;
      expression: Array<string | null> | null;
      last_changed: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFvDRoomMutation = {
  __typename: "FvDRoom";
  id: string;
  name: string;
  users: {
    __typename: "ModelFvDUserConnection";
    items: Array<{
      __typename: "FvDUser";
      id: string;
      roomID: string;
      expression: Array<string | null> | null;
      last_changed: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFvDRoomMutation = {
  __typename: "FvDRoom";
  id: string;
  name: string;
  users: {
    __typename: "ModelFvDUserConnection";
    items: Array<{
      __typename: "FvDUser";
      id: string;
      roomID: string;
      expression: Array<string | null> | null;
      last_changed: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateFvDUserMutation = {
  __typename: "FvDUser";
  id: string;
  roomID: string;
  expression: Array<string | null> | null;
  last_changed: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFvDUserMutation = {
  __typename: "FvDUser";
  id: string;
  roomID: string;
  expression: Array<string | null> | null;
  last_changed: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFvDUserMutation = {
  __typename: "FvDUser";
  id: string;
  roomID: string;
  expression: Array<string | null> | null;
  last_changed: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncFvDRoomsQuery = {
  __typename: "ModelFvDRoomConnection";
  items: Array<{
    __typename: "FvDRoom";
    id: string;
    name: string;
    users: {
      __typename: "ModelFvDUserConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetFvDRoomQuery = {
  __typename: "FvDRoom";
  id: string;
  name: string;
  users: {
    __typename: "ModelFvDUserConnection";
    items: Array<{
      __typename: "FvDUser";
      id: string;
      roomID: string;
      expression: Array<string | null> | null;
      last_changed: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListFvDRoomsQuery = {
  __typename: "ModelFvDRoomConnection";
  items: Array<{
    __typename: "FvDRoom";
    id: string;
    name: string;
    users: {
      __typename: "ModelFvDUserConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncFvDUsersQuery = {
  __typename: "ModelFvDUserConnection";
  items: Array<{
    __typename: "FvDUser";
    id: string;
    roomID: string;
    expression: Array<string | null> | null;
    last_changed: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetFvDUserQuery = {
  __typename: "FvDUser";
  id: string;
  roomID: string;
  expression: Array<string | null> | null;
  last_changed: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListFvDUsersQuery = {
  __typename: "ModelFvDUserConnection";
  items: Array<{
    __typename: "FvDUser";
    id: string;
    roomID: string;
    expression: Array<string | null> | null;
    last_changed: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateFvDRoomSubscription = {
  __typename: "FvDRoom";
  id: string;
  name: string;
  users: {
    __typename: "ModelFvDUserConnection";
    items: Array<{
      __typename: "FvDUser";
      id: string;
      roomID: string;
      expression: Array<string | null> | null;
      last_changed: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFvDRoomSubscription = {
  __typename: "FvDRoom";
  id: string;
  name: string;
  users: {
    __typename: "ModelFvDUserConnection";
    items: Array<{
      __typename: "FvDUser";
      id: string;
      roomID: string;
      expression: Array<string | null> | null;
      last_changed: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFvDRoomSubscription = {
  __typename: "FvDRoom";
  id: string;
  name: string;
  users: {
    __typename: "ModelFvDUserConnection";
    items: Array<{
      __typename: "FvDUser";
      id: string;
      roomID: string;
      expression: Array<string | null> | null;
      last_changed: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFvDUserSubscription = {
  __typename: "FvDUser";
  id: string;
  roomID: string;
  expression: Array<string | null> | null;
  last_changed: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFvDUserSubscription = {
  __typename: "FvDUser";
  id: string;
  roomID: string;
  expression: Array<string | null> | null;
  last_changed: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFvDUserSubscription = {
  __typename: "FvDUser";
  id: string;
  roomID: string;
  expression: Array<string | null> | null;
  last_changed: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFvDRoom(
    input: CreateFvDRoomInput,
    condition?: ModelFvDRoomConditionInput
  ): Promise<CreateFvDRoomMutation> {
    const statement = `mutation CreateFvDRoom($input: CreateFvDRoomInput!, $condition: ModelFvDRoomConditionInput) {
        createFvDRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          users {
            __typename
            items {
              __typename
              id
              roomID
              expression
              last_changed
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFvDRoomMutation>response.data.createFvDRoom;
  }
  async UpdateFvDRoom(
    input: UpdateFvDRoomInput,
    condition?: ModelFvDRoomConditionInput
  ): Promise<UpdateFvDRoomMutation> {
    const statement = `mutation UpdateFvDRoom($input: UpdateFvDRoomInput!, $condition: ModelFvDRoomConditionInput) {
        updateFvDRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          users {
            __typename
            items {
              __typename
              id
              roomID
              expression
              last_changed
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFvDRoomMutation>response.data.updateFvDRoom;
  }
  async DeleteFvDRoom(
    input: DeleteFvDRoomInput,
    condition?: ModelFvDRoomConditionInput
  ): Promise<DeleteFvDRoomMutation> {
    const statement = `mutation DeleteFvDRoom($input: DeleteFvDRoomInput!, $condition: ModelFvDRoomConditionInput) {
        deleteFvDRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          users {
            __typename
            items {
              __typename
              id
              roomID
              expression
              last_changed
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFvDRoomMutation>response.data.deleteFvDRoom;
  }
  async CreateFvDUser(
    input: CreateFvDUserInput,
    condition?: ModelFvDUserConditionInput
  ): Promise<CreateFvDUserMutation> {
    const statement = `mutation CreateFvDUser($input: CreateFvDUserInput!, $condition: ModelFvDUserConditionInput) {
        createFvDUser(input: $input, condition: $condition) {
          __typename
          id
          roomID
          expression
          last_changed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFvDUserMutation>response.data.createFvDUser;
  }
  async UpdateFvDUser(
    input: UpdateFvDUserInput,
    condition?: ModelFvDUserConditionInput
  ): Promise<UpdateFvDUserMutation> {
    const statement = `mutation UpdateFvDUser($input: UpdateFvDUserInput!, $condition: ModelFvDUserConditionInput) {
        updateFvDUser(input: $input, condition: $condition) {
          __typename
          id
          roomID
          expression
          last_changed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFvDUserMutation>response.data.updateFvDUser;
  }
  async DeleteFvDUser(
    input: DeleteFvDUserInput,
    condition?: ModelFvDUserConditionInput
  ): Promise<DeleteFvDUserMutation> {
    const statement = `mutation DeleteFvDUser($input: DeleteFvDUserInput!, $condition: ModelFvDUserConditionInput) {
        deleteFvDUser(input: $input, condition: $condition) {
          __typename
          id
          roomID
          expression
          last_changed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFvDUserMutation>response.data.deleteFvDUser;
  }
  async SyncFvDRooms(
    filter?: ModelFvDRoomFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFvDRoomsQuery> {
    const statement = `query SyncFvDRooms($filter: ModelFvDRoomFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFvDRooms(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            users {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFvDRoomsQuery>response.data.syncFvDRooms;
  }
  async GetFvDRoom(id: string): Promise<GetFvDRoomQuery> {
    const statement = `query GetFvDRoom($id: ID!) {
        getFvDRoom(id: $id) {
          __typename
          id
          name
          users {
            __typename
            items {
              __typename
              id
              roomID
              expression
              last_changed
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFvDRoomQuery>response.data.getFvDRoom;
  }
  async ListFvDRooms(
    filter?: ModelFvDRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFvDRoomsQuery> {
    const statement = `query ListFvDRooms($filter: ModelFvDRoomFilterInput, $limit: Int, $nextToken: String) {
        listFvDRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            users {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFvDRoomsQuery>response.data.listFvDRooms;
  }
  async SyncFvDUsers(
    filter?: ModelFvDUserFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFvDUsersQuery> {
    const statement = `query SyncFvDUsers($filter: ModelFvDUserFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFvDUsers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            roomID
            expression
            last_changed
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFvDUsersQuery>response.data.syncFvDUsers;
  }
  async GetFvDUser(id: string): Promise<GetFvDUserQuery> {
    const statement = `query GetFvDUser($id: ID!) {
        getFvDUser(id: $id) {
          __typename
          id
          roomID
          expression
          last_changed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFvDUserQuery>response.data.getFvDUser;
  }
  async ListFvDUsers(
    filter?: ModelFvDUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFvDUsersQuery> {
    const statement = `query ListFvDUsers($filter: ModelFvDUserFilterInput, $limit: Int, $nextToken: String) {
        listFvDUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomID
            expression
            last_changed
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFvDUsersQuery>response.data.listFvDUsers;
  }
  OnCreateFvDRoomListener: Observable<
    OnCreateFvDRoomSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFvDRoom {
        onCreateFvDRoom {
          __typename
          id
          name
          users {
            __typename
            items {
              __typename
              id
              roomID
              expression
              last_changed
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateFvDRoomSubscription>;

  OnUpdateFvDRoomListener: Observable<
    OnUpdateFvDRoomSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFvDRoom {
        onUpdateFvDRoom {
          __typename
          id
          name
          users {
            __typename
            items {
              __typename
              id
              roomID
              expression
              last_changed
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateFvDRoomSubscription>;

  OnDeleteFvDRoomListener: Observable<
    OnDeleteFvDRoomSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFvDRoom {
        onDeleteFvDRoom {
          __typename
          id
          name
          users {
            __typename
            items {
              __typename
              id
              roomID
              expression
              last_changed
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteFvDRoomSubscription>;

  OnCreateFvDUserListener: Observable<
    OnCreateFvDUserSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFvDUser {
        onCreateFvDUser {
          __typename
          id
          roomID
          expression
          last_changed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateFvDUserSubscription>;

  OnUpdateFvDUserListener: Observable<
    OnUpdateFvDUserSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFvDUser {
        onUpdateFvDUser {
          __typename
          id
          roomID
          expression
          last_changed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateFvDUserSubscription>;

  OnDeleteFvDUserListener: Observable<
    OnDeleteFvDUserSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFvDUser {
        onDeleteFvDUser {
          __typename
          id
          roomID
          expression
          last_changed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteFvDUserSubscription>;
}
