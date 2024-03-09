import React, {useState} from 'react';
import classes from './Counter.module.scss'
// import './Counter.module.scss'

const Counter = () => {

    const [count, setCount] = useState<number>(0)

    function increment() {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increment}>add</button>
        </div>
    );
};

export default Counter;