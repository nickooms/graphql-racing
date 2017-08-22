import ReactSelector from 'testcafe-react-selectors';

export default class ChannelsListPage {
  constructor() {
    this.addChannelInput = ReactSelector('AddChannel input');
    this.channel = ReactSelector('ChannelsList')
      .find('div.channel')
      .withAttribute('class', 'channel ');
  }
};
