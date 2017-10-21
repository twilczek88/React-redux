import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store.js';
import Layout from './containers/Layout/Layout.js';

class Root extends Component {
    render(){
        return <Provider store = { store }>
            <Layout/>
        </Provider>
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Root/>, document.querySelector('#app')
    );
});
