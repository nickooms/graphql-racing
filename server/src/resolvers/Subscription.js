import { withFilter } from 'graphql-subscriptions';

import pubsub from './pubsub';

const Subscription = {
  messageAdded: {
    subscribe: withFilter(() => pubsub.asyncIterator('messageAdded'), (payload, variables) => {
      return payload.channelId === variables.channelId;
    }),
  }
};

export default Subscription;
