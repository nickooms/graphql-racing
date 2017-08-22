import renderer from 'react-test-renderer';
import React from 'react';

import NotFound from './NotFound';

test('NotFound renders appropriately', () => {
  const component = renderer.create(
    <NotFound />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
