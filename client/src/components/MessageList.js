import React from 'react';

import MessageListItem from './MessageListItem';
import AddMessage from './AddMessage';

const MessageList = ({ messages }) => (
  <div className="messagesList">
    {messages.map(MessageListItem)}
    <AddMessage />
  </div>
);

export default MessageList;
