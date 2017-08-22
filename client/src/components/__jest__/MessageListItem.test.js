import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

import MessageListItem from './MessageListItem';

const MessageListItemData = {
  normal: {
    id: 1,
    text: 'normal'
  },
  optimistic: {
    id: -1000,
    text: 'optimistic'
  }
};

const { normal, optimistic } = MessageListItemData;

[normal, optimistic].forEach(({ id, text }) => {
  test(`MessageListItem renders ${text} appropriately`, () => {
    const component = renderer.create(
      <MemoryRouter>
        <MessageListItem id={id} text={text} />
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
