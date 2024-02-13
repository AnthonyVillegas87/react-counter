
import './Counter.css'
import {useState} from "react";
import CountButton from './CountButton';


export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementParentCount(by) {
        setCount(count + by)
    }

    function decrementParentCount(by) {
        setCount(count - by)
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CountButton by={1} incrementFunction={incrementParentCount} decrementFunction={decrementParentCount}/>
            <CountButton by={2} incrementFunction={incrementParentCount} decrementFunction={decrementParentCount}/>
            <CountButton by={3} incrementFunction={incrementParentCount} decrementFunction={decrementParentCount}/>
            <button className="resetButton"
                     onClick={resetCount}>Reset</button>
        </>

    )
}

