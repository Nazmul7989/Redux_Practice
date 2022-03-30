import store from './store/Store.js';

// store.subscribe(()=> console.log(store.getState().formInput));
store.subscribe(()=> console.log(store.getState()));

// console.log('store', store);
// console.log('store previous state', store.getState());
// store.dispatch({type: 'increment'})
// console.log('store previous state after incrementing',store.getState() );
// store.dispatch({type: 'decrement'})
// console.log('store previous state after decrementing', store.getState());


// store.dispatch({type: 'increment'})
// store.dispatch({type: 'decrement'})
// store.dispatch({type: 'largeIncrement',value: 10})



store.dispatch({type: 'changeInput',payload: 'This is new title'})

let titleData = {
    id: new Date().getMilliseconds(),
    title: store.getState().taskReducer.formInput
}
store.dispatch({type: 'changeTask',payload: titleData})

console.log(store.getState());