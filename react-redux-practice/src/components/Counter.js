import React, {Fragment} from 'react';
import {useSelector} from "react-redux";

const Counter = () => {

    const counter = useSelector((state) => state.counterReducer.value)

    return (
        <Fragment>
            <h4>Counter Value: { counter}</h4>
        </Fragment>
    );
};

export default Counter;