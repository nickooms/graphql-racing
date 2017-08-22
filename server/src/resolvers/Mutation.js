import channels from './channels';
import pubsub from './pubsub';

let nextId = 3;
let nextMessageId = 5;

const Mutation = {
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
};

export default Mutation;
