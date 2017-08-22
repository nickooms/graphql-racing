import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

import ChannelsListItem from './ChannelsListItem';

const id = 1;
const name = 'soccer';

test('ChannelsListItem renders appropriately', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ChannelsListItem id={id} name={name} />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
