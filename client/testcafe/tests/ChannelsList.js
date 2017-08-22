import { url, timestamp } from '../util';
import ChannelsListPage from '../ChannelsListPage';

fixture('Channels List').page(url());

const { addChannelInput, channel } = new ChannelsListPage();

const soccer = channel.withText('soccer');
const baseball = channel.withText('baseball');
const newChannelName = `Channel ${timestamp()}`;
const newChannel = channel.withText(newChannelName);

test('soccer channel exists', async t => {
  await t.expect(soccer.exists).ok();
});

test('baseball channel exists', async t => {
  await t.expect(baseball.exists).ok();
});

test('Add Channel works', async t => {
  await t.typeText(addChannelInput, newChannelName)
  .pressKey('enter')
  .expect(newChannel.exists).ok();
});
