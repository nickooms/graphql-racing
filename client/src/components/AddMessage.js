import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import React from 'react';

import { tempId, findById } from '../util';
import query from '../query/channelDetails';
import mutation from '../mutation/addMessage';

const AddMessage = ({ mutate, match: { params: { channelId } } }) => {
  const onKeyUp = ({ keyCode, target }) => {
    if (keyCode === 13) {
      const text = target.value;
      mutate({
        variables: { message: { channelId, text } },
        optimisticResponse: {
          addMessage: { __typename: 'Message', id: tempId(), text },
        },
        update: (store, { data: { addMessage } }) => {
          const variables = { channelId };
          const data = store.readQuery({ query, variables });
          const { messages } = data.channel;
          if (!messages.find(findById(addMessage.id))) messages.push(addMessage);
          store.writeQuery({ query, variables, data });
        },
      });
      target.value = '';
    }
  };
  return (
    <div className="messageInput">
      <input type="text" placeholder="New message" onKeyUp={onKeyUp} />
    </div>
  );
};

const AddMessageWithMutation = graphql(mutation)(withRouter(AddMessage));

export default AddMessageWithMutation;
