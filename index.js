console.log('Hello')

import {createStore} from "redux";

let initialState = {
    value : 0
}

function counterReducer(state = initialState,action) {
    switch (action.type){
        case 'increment':
            return { value: state.value + 1 }
        case 'decrement':
            return { value: state.value - 1 }
        default:
            return state
    }
}

let store = createStore(counterReducer);

console.log('store', store);
console.log('store previous state', store.getState());
store.dispatch({type: 'increment'})
console.log('store previous state after incrementing',store.getState() );
store.dispatch({type: 'decrement'})
console.log('store previous state after decrementing', store.getState());
