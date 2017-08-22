import channels from './channels';

const Query = {
  channels: () => {
    return channels;
  },
  channel: (root, { id }) => {
    return channels.find(channel => channel.id === id);
  },
};

export default Query;
