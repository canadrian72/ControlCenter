import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { JuliansRoom } from './components/JuliansRoom';
import { Cloud } from './components/Cloud';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/cloud' component={Cloud} />
        <Route path='/julians-room' component={JuliansRoom} />
      </Layout>
    );
  }
}
