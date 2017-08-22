import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import ChannelsListWithData from './components/ChannelsListWithData';
import ChannelDetails from './components/ChannelDetails';
import NotFound from './components/NotFound';
import client from './client';
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <Link to="/" className="navbar">React + GraphQL Tutorial</Link>
            <Switch>
              <Route exact path="/" component={ChannelsListWithData}/>
              <Route path="/channel/:channelId" component={ChannelDetails}/>
              <Route component={ NotFound }/>
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
