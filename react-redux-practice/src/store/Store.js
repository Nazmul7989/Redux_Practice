import rootReducer from './RootReducer';
import {configureStore} from "@reduxjs/toolkit";


export default configureStore({
    reducer: rootReducer
})

