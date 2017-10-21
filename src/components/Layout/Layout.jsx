import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import RouterContainer from '../../containers/RouterContainer/RouterContainer.js';
import Navigation from '../../containers/Navigation/Navigation.js';


export default class Layout extends Component {
  render(){
    return <Router>
      <RouterContainer/>
    </Router>
  }
}
