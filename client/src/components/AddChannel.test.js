import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import AddChannel from './AddChannel';
import ChannelData from './__testdata__/Channel';
import client from '../test-client';

const { match } = ChannelData;

test('AddChannel renders appropriately', () => {
  const component = renderer.create(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AddChannel />
      </BrowserRouter>
    </ApolloProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
