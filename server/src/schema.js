import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

const Channel = `
type Channel {
  id: ID!
  name: String
  messages: [Message]!
}
`;

const MessageInput = `
input MessageInput{
  channelId: ID!
  text: String
}
`;

const Message = `
type Message {
  id: ID!
  text: String
}
`;

const Query = `
type Query {
  channels: [Channel]
  channel(id: ID!): Channel
}
`;

const Mutation = `
type Mutation {
  addChannel(name: String!): Channel
  addMessage(message: MessageInput!): Message
}
`;

const Subscription = `
type Subscription {
  messageAdded(channelId: ID!): Message
}
`;

const typeDefs = [Channel, MessageInput, Message, Query, Mutation, Subscription];

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
