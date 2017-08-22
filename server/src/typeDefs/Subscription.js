import Message from './Message';

const Subscription = `
  type Subscription {
    messageAdded(channelId: ID!): Message
  }
`;

export default () => [Subscription, Message];
