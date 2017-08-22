import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import express from 'express';
import cors from 'cors';

import { schema } from './src/schema';

const PORT = 4000;
const endpointURL = '/graphql';
const subscriptionsEndpoint = `ws://localhost:4000/subscriptions`;
const path = '/subscriptions';
const app = express();

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL, subscriptionsEndpoint }));

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
  new SubscriptionServer({ execute, subscribe, schema }, { server, path });
});
