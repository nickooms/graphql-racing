import { gql } from 'react-apollo';

const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

export default addChannelMutation;
