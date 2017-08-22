import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import React from 'react';

import { tempId, findById } from '../util';
import query from '../query/channelDetails';
import mutation from '../mutation/addMessage';

const update = variables => (store, { data: { addMessage } }) => {
  const data = store.readQuery({ query, variables });
  const list = data.channel.messages;
  if (!list.find(findById(addMessage.id))) list.push(addMessage);
  store.writeQuery({ query, variables, data });
};

const AddMessage = ({ mutate, match: { params: { channelId } } }) => {
  const onKeyUp = ({ keyCode, target }) => {
    if (keyCode === 13) {
      const text = target.value;
      mutate({
        variables: { message: { channelId, text } },
        optimisticResponse: {
          addMessage: { __typename: 'Message', id: tempId(), text },
        },
        update: update({ channelId }),
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
