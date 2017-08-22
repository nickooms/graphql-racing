import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';

import channels from './resolvers/channels';
import Query from './resolvers/Query';

let nextId = 3;
let nextMessageId = 5;

const pubsub = new PubSub();

export const resolvers = {
  Query,
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: String(nextId++), messages: [], name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
    addMessage: (root, { message: { channelId, text } }) => {
      const channel = channels.find(channel => channel.id === channelId);
      if (!channel) throw new Error('Channel does not exist');
      const messageAdded = { id: String(nextMessageId++), text };
      channel.messages.push(messageAdded);
      pubsub.publish('messageAdded', { messageAdded, channelId });
      return messageAdded;
    },
  },
  Subscription: {
    messageAdded: {
      subscribe: withFilter(() => pubsub.asyncIterator('messageAdded'), (payload, variables) => {
        return payload.channelId === variables.channelId;
      }),
    }
  },
};
