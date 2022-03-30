import React, {Fragment} from 'react';
import {useSelector} from "react-redux";

const Task = () => {

    const tasks = useSelector((state) => state.taskReducer.task)

    const taskData = tasks.map((task,index)=>{
        return <ul key={index}>
            <li>{ task.title }</li>
        </ul>
    })


    return (
        <Fragment>

            { taskData}

        </Fragment>
    );
};

export default Task;