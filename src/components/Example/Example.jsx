import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Example.scss';

class Example extends Component {

    handleIncrementClick = () => {
        this.props.onIncrement("Dupa Maryna");
    }

    handleDecrementClick = () => {
        this.props.onDecrement("Nie przeszkadzaj mi, myślę");
    }

    render(){
        const { foo, bar } = this.props;
        return <div styleName = 'container' className = 'someClass'>
            <p>foo: { this.props.foo } <br/> bar: { this.props.bar }</p>
            <button onClick={ this.handleDecrementClick }>DECREMENT</button>
            <button onClick={ this.handleIncrementClick }>INCREMENT</button>
        </div>
    }
}

export default CSSModules(Example, styles);
