import { withFilter } from 'graphql-subscriptions';

import pubsub from './resolvers/pubsub';
import channels from './resolvers/channels';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

export const resolvers = {
  Query,
  Mutation,
  Subscription: {
    messageAdded: {
      subscribe: withFilter(() => pubsub.asyncIterator('messageAdded'), (payload, variables) => {
        return payload.channelId === variables.channelId;
      }),
    }
  },
};
