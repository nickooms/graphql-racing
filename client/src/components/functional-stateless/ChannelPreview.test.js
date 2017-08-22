import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import React from 'react';

import ChannelPreview from './ChannelPreview';
import ChannelData from '../__testdata__/Channel';
import client from '../../test-client';

const { data } = ChannelData;

test('ChannelPreview renders appropriately', () => {
  const component = renderer.create(
    <ApolloProvider client={client}>
      <ChannelPreview data={data} />
    </ApolloProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ChannelPreview error renders appropriately', () => {
  const component = renderer.create(
    <ApolloProvider client={client}>
      <ChannelPreview data={{ error: { message: 'ERROR' } }} />
    </ApolloProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});