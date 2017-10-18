import { connect } from 'react-redux';
import Example from '../../components/Example/Example.jsx';
import * as actions from '../../modules/Example/actions.js';

const mapStateToProps = state => {
    console.log('state: ',state);
    return {
        foo : state.example.foo,
        bar : state.example.bar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: newBar => dispatch(actions.onIncrement(newBar)),
        onDecrement: newBar => dispatch(actions.onDecrement(newBar))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
