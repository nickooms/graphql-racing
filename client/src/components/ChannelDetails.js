import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import query from '../query/channelDetails';
import ChannelPreview from './ChannelPreview';
import MessageList from './MessageList';
import NotFound from './NotFound';
import messagesSubscription from './messagesSubscription';

class ChannelDetails extends Component {
  componentWillMount() {
    this.props.data.subscribeToMore({
      document: messagesSubscription,
      variables: { channelId: this.props.match.params.channelId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.messageAdded;
        if (!prev.channel.messages.find((msg) => msg.id === newMessage.id)) {
          return Object.assign({}, prev, {
            channel: Object.assign({}, prev.channel, {
              messages: [...prev.channel.messages, newMessage]
            })
          });
        }
        return prev;
      }
    })
  }

  render() {
    const {
      data: { loading, error, channel },
      match: { params: { channelId } },
    } = this.props;
    if (loading) return (
      <ChannelPreview channelId={channelId} />
    );
    if (error) return (
      <p>{error.message}</p>
    );
    if (channel === null) return (
      <NotFound />
    );
    const { name, messages } = channel;
    return (
      <div>
        <div className="channelName">{name}</div>
        <MessageList messages={messages}/>
      </div>
    );
  }
}

export default (graphql(query, {
  options: (props) => ({
    variables: { channelId: props.match.params.channelId },
  }),
})(ChannelDetails));
