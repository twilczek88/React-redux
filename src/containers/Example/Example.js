import { connect } from 'react-redux';
import Example from '../../components/Example/Example.jsx';
import * as actions from '../../modules/Example/actions.js';

//passing redux variables to props
const mapStateToProps = state => {
    return {
        foo : state.example.foo,
        bar : state.example.bar
    }
}

//passing redux actions to props
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: newBar => dispatch(actions.onIncrement(newBar)),
        onDecrement: newBar => dispatch(actions.onDecrement(newBar))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
