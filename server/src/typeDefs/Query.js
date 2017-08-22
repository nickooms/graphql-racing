import Channel from './Channel';

const Query = `
  type Query {
    channels: [Channel]
    channel(id: ID!): Channel
  }
`;

export default () => [Query, Channel];
