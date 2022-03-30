import {combineReducers} from "redux";
import taskReducer from './TaskReducer.js'
import counterReducer from './ConterReducer.js'

const RootReducer = combineReducers({
    taskReducer : taskReducer,
    counterReducer: counterReducer
})

export default RootReducer;