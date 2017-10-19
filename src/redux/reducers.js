//import reducers in redux/store 
import { combineReducers } from 'redux';

import exampleReducer from '../modules/Example/reducer.js';

const reducers = combineReducers({
    example : exampleReducer
});

export default reducers;
