import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Task = () => {

    const {formInput,task} = useSelector((state) => state.taskReducer)
    const dispatch = useDispatch();

    const taskData = task.map((task,index)=>{
        return <ul key={index}>
            <li>{ task.title }</li>
        </ul>
    })

    const onChangeHandler = (value)=>{

        dispatch({type: 'changeInput', payload: value})
    }

    const onClickHandler = (e) =>{
        e.preventDefault();

        let titleData = {
            id: new Date().getMilliseconds(),
            title: formInput
        }

        dispatch({type: 'changeTask', payload: titleData})
    }

    return (
        <Fragment>

            <form>
                <input value={formInput} onChange={(e)=>onChangeHandler(e.target.value)} type="text"/>
                <input type="submit" onClick={onClickHandler} value="Save"/>
            </form>

            { taskData}

        </Fragment>
    );
};

export default Task;