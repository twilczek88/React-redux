const initialState = {
    foo: 0,
    bar: 'initial State'
};

const exampleReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'INCREMENT': {
            return {
                ...state,
                foo: state.foo + 1,
                bar: action.payload
            };
            break;
        }

        case 'DECREMENT': {
            return {
                ...state,
                foo: state.foo -1,
                bar: action.payload
            };
            break;
        }
    }
    return state;
}

export default exampleReducer;
