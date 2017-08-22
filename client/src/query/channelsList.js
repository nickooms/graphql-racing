import { gql } from 'react-apollo';

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

export default channelsListQuery;
