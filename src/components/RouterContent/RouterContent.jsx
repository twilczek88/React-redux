import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Example from '../../containers/Example/Example.js';

export default class RouterContent extends Component {
  render() {
    return <Switch>
      <Route component = { Example }/>
    </Switch>
  }
}
