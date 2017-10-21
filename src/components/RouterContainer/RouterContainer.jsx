import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './RouterContainer.scss';

import Navigation from '../../components/Navigation/Navigation.jsx';
import RouterContent from '../../components/RouterContent/RouterContent.jsx';

class RouterContainer extends Component {
  render() {
      return <main>
        <Navigation/>
        <RouterContent/>
      </main>
  }
}

export default CSSModules(RouterContainer, styles);
