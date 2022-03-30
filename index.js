console.log('Hello')

import {createStore} from "redux";

let initialState = {
    value : 0
}

function counterReducer(state = initialState,action) {
    switch (action.type){
        case 'increment':
            return { value: state.value + 1 }
        default:
            return state
    }
}

let store = createStore(counterReducer);

console.log(store.getState())