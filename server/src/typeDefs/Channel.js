import Message from './Message';

const Channel = `
  type Channel {
    id: ID!
    name: String
    messages: [Message]!
  }
`;

export default () => [Channel, Message];
