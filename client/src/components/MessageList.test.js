import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

import MessageList from './MessageList';

const MessageListData = {
  noMessages: {
    messages: []
  },
  messages: {
    messages: [{
      id: 1,
      text: 'message'
    }]
  }
};

const { noMessages, messages } = MessageListData;

[noMessages, messages].forEach(({ messages }) => {
  test(`MessageList renders ${messages.length} messages appropriately`, () => {
    const component = renderer.create(
      <MemoryRouter>
        <MessageList messages={messages} />
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
