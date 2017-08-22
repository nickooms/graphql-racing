import React from 'react';

const ChannelPreview = ({ data: { loading, error, channel } }) => {
  if (loading) return (
    <p>Loading ...</p>
  );
  if (error) return (
    <p>{error.message}</p>
  );
  const { name } = channel;
  return (
    <div>
      <div className="channelName">{name}</div>
      <div>Loading Messages</div>
    </div>
  );
};

export default ChannelPreview;
