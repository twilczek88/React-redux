import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store.js';
import RouterContent from './components/RouterContent/RouterContent.jsx';

class Root extends Component {
    render(){
        return <Provider store = { store }>
            <RouterContent/>
        </Provider>
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Root/>, document.querySelector('#app')
    );
});
