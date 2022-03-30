import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from './store/Store';

// store.dispatch({ type: 'changeInput', payload: "This is test title"})
// console.log(store.getState().taskReducer.formInput)


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);



