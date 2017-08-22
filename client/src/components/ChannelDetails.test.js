import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import React from 'react';

import ChannelData from './__testdata__/Channel';
import ChannelDetails from './ChannelDetails';
import client from '../test-client';

const { data, match } = ChannelData;

test('ChannelDetails renders appropriately', () => {
  const component = renderer.create(
    <ApolloProvider client={client}>
      <ChannelDetails data={data} match={match} />
    </ApolloProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
