import React from 'react';

const MessageListItem = ({ id, text }) => (
  <div key={id} className={`message ${id < 0 ? 'optimistic' : ''}`}>{text}</div>
);

export default MessageListItem;
