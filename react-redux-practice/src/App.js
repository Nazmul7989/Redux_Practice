import logo from './logo.svg';
import './App.css';
import React, {Fragment} from "react";
import Counter from "./components/Counter";
import Task from "./components/Task";
import {useSelector} from "react-redux";

function App() {

    const tasks = useSelector((state) => state.taskReducer.task)


    return (
    <Fragment>
      <div style={{marginLeft: '100px'}}>
        <Counter/>
        <h4>Total Task - { tasks.length }</h4>
        <Task/>
      </div>
    </Fragment>
  );
}

export default App;
