import { graphql } from 'react-apollo';
import React from 'react';

import query from '../query/channelsList';
import ChannelsListItem from './ChannelsListItem';
import AddChannel from './AddChannel';

const ChannelsList = ({ data: { loading, error, channels } }) => {
  if (loading) return (
    <p>Loading ...</p>
  );
  if (error) return (
    <p>{error.message}</p>
  );
  return (
    <div className="channelsList">
      <AddChannel />
      {channels.map(ChannelsListItem)}
    </div>
  );
};

export default graphql(query, { options: { pollInterval: 5000 } })(ChannelsList);
