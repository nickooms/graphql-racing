import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import React from 'react';

import ChannelsData from './__testdata__/Channels';
import ChannelsListWithData from './ChannelsListWithData';
import client from '../test-client';

const { data } = ChannelsData;

test('ChannelsListWithData renders appropriately', () => {
  const component = renderer.create(
    <ApolloProvider client={client}>
      <ChannelsListWithData data={data} />
    </ApolloProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
