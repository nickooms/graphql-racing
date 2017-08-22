import { url, timestamp } from '../util';
import ChannelDetailsPage from '../ChannelDetailsPage';

fixture('Channel Details').page(url('channel/1'));

const { channelDetails, channelName, addMessageInput, message } = new ChannelDetailsPage();

const soccerChannelName = channelName.withText('soccer');
const soccerIsFootball = message.withText('soccer is football');
const helloSoccerWorldCup = message.withText('hello soccer world cup');
const newMessageText = `Message ${timestamp()}`;
const newMessage = message.withText(newMessageText);

test('contains soccer name', async t => {
  await t.expect(channelDetails.exists).ok();
  await t.expect(soccerChannelName.exists).ok();
});

test('soccer is football message exists', async t => {
  await t.expect(soccerIsFootball.exists).ok();
});

test('hello soccer world cup message exists', async t => {
  await t.expect(helloSoccerWorldCup.exists).ok();
});

test('Add Message works', async t => {
  await t.typeText(addMessageInput, newMessageText)
  .pressKey('enter')
  .expect(newMessage.exists).ok();
});
