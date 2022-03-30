let initialState = {
    value : 0,
}

function CounterReducer(state = initialState,action) {
    switch (action.type){
        case 'increment':
            return {
                ...state,
                value: state.value + 1
            }
        case 'decrement':
            return {
                ...state,
                value: state.value - 1
            }
        case 'largeIncrement':
            return {
                ...state,
                value: state.value + action.value
            }
        default:
            return state
    }
}

export default CounterReducer;