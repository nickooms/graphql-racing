import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import AddMessage from './AddMessage';
import ChannelData from './__testdata__/Channel';
import client from '../test-client';

const { match } = ChannelData;

test('AddMessage renders appropriately', () => {
  const component = renderer.create(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AddMessage match={match} />
      </BrowserRouter>
    </ApolloProvider>
  );
  let tree = component.toJSON();
  console.log(tree.children);
  tree.children[0].props.onKeyUp({ keyCode: 65 });
  expect(tree).toMatchSnapshot();
});
