// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FvDRoom, FvDUser } = initSchema(schema);

export {
  FvDRoom,
  FvDUser
};