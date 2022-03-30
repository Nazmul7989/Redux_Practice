import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {

    const counter = useSelector((state) => state.counterReducer.value)
    const dispatch = useDispatch();

    return (
        <Fragment>
            <h4>Counter App</h4>
            <div>
                <button onClick={()=> dispatch({type: 'increment'})}>+</button>
                <span style={{ padding: '10px'}}>{ counter}</span>
                <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
            </div>

        </Fragment>
    );
};

export default Counter;