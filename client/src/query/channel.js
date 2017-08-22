import { gql } from 'react-apollo';

const channelQuery = gql`
  query ChannelQuery($channelId : ID!) {
    channel(id: $channelId) {
      id
      name
    }
  }
`;

export default channelQuery;
