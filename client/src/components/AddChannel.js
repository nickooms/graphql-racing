import { graphql } from 'react-apollo';
import React from 'react';

import { tempId } from '../util';
import query from '../query/channelsList';
import mutation from '../mutation/addChannel';

const AddChannel = ({ mutate }) => {
  const onKeyUp = ({ keyCode, target }) => {
    if (keyCode === 13) {
      const name = target.value;
      mutate({ 
        variables: { name },
        optimisticResponse: {
          addChannel: { __typename: 'Channel', id: tempId(), name },
        },
        update: (store, { data: { addChannel } }) => {
          const data = store.readQuery({ query });
          data.channels.push(addChannel);
          store.writeQuery({ query, data });
        },
      });
      target.value = '';
    }
  };
  return (
    <input type="text" placeholder="New channel" onKeyUp={onKeyUp} />
  );
};

const AddChannelWithMutation = graphql(mutation)(AddChannel);

export default AddChannelWithMutation;