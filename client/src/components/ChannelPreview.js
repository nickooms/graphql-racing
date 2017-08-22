import { graphql } from 'react-apollo';

import query from '../query/channel';

import ChannelPreview from './functional-stateless/ChannelPreview';

export default (graphql(query, {
  options: (props) => ({
    variables: { channelId: props.channelId },
  }),
})(ChannelPreview));
