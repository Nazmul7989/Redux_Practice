import {createStore} from "redux";

let initialState = {
    value : 0,
    name: 'Nazmul',
    formInput: '',
    task: [
        {
            id: 1,
            title: 'task title one'
        },
        {
            id: 2,
            title: 'task title two'
        },
        {
            id: 3,
            title: 'task title three'
        },
    ]
}

function counterReducer(state = initialState,action) {
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
        case 'changeName':
            return {
                ...state,
                name: action.name
            }
        case 'changeInput':
            return {
                ...state,
                formInput: action.payload
            }
        case 'changeTask':
            return {
                ...state,
                task: [...state.task,  action.payload]
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


// store.subscribe(()=> console.log(store.getState().formInput));
store.subscribe(()=> console.log(store.getState()));

// store.dispatch({type: 'increment'})
// store.dispatch({type: 'decrement'})
// store.dispatch({type: 'largeIncrement',value: 10})
// store.dispatch({type: 'changeName',name: 'Md Nazmul Hasan'})


store.dispatch({type: 'changeInput',payload: 'This is new title'})

let titleData = {
    id: new Date().getMilliseconds(),
    title: store.getState().formInput
}
store.dispatch({type: 'changeTask',payload: titleData})