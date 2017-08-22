import Channel from './Channel';
import Message from './Message';

const Mutation = `
  type Mutation {
    addChannel(name: String!): Channel
    addMessage(message: MessageInput!): Message
  }
`;

export default () => [Mutation, Channel, Message];
