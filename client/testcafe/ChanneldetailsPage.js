import ReactSelector from 'testcafe-react-selectors';

export default class ChannelsDetailsPage {
  constructor() {
    this.channelDetails = ReactSelector('ChannelDetails');
    this.channelName = this.channelDetails.find('div div.channelName');
    this.addMessage = ReactSelector('AddMessage');
    this.addMessageInput = this.addMessage.find('input');
    this.messageList = ReactSelector('MessageList');
    this.message = this.messageList
      .find('div.messagesList div')
      .withAttribute('class', 'message ');
  }
};
