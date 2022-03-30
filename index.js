import {createStore} from "redux";

let initialState = {
    value : 0,
    name: 'Nazmul'
}

function counterReducer(state = initialState,action) {
    switch (action.type){
        case 'increment':
            return {
                value: state.value + 1
            }
        case 'decrement':
            return {
                value: state.value - 1
            }
        case 'largeIncrement':
            return {
                value: state.value + action.value
            }
        case 'changeName':
            return {
                name: action.name
            }
        default:
            return state
    }
}

let store = createStore(counterReducer);

// console.log('store', store);
// console.log('store previous state', store.getState());
// store.dispatch({type: 'increment'})
// console.log('store previous state after incrementing',store.getState() );
// store.dispatch({type: 'decrement'})
// console.log('store previous state after decrementing', store.getState());


store.subscribe(()=> console.log(store.getState()));

store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})
store.dispatch({type: 'largeIncrement',value: 10})
store.dispatch({type: 'changeName',name: 'Md Nazmul Hasan'})