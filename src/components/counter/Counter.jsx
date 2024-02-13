
import './Counter.css'
import {useState} from "react";
import {PropTypes} from "prop-types";


export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementParentCount(by) {
        setCount(count + by)
    }

    function decrementParentCount(by) {
        setCount(count - by)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CountButton by={1} incrementFunction={incrementParentCount} decrementFunction={decrementParentCount}/>
            <CountButton by={2} incrementFunction={incrementParentCount} decrementFunction={decrementParentCount}/>
            <CountButton by={3} incrementFunction={incrementParentCount} decrementFunction={decrementParentCount}/>
        </>

    )
}

function CountButton({by, incrementFunction, decrementFunction}) {

    const [count, setCount] = useState(0);

    function incrementCountFunction() {
       setCount(count + by)
        incrementFunction(by)
    }

    function decrementCountFunction() {
        setCount(count - by)
        decrementFunction(by)
    }

    return (
        <div className="Counter">

            <div>
                <button className="counterButton"
                        onClick={incrementCountFunction}
                >+{by}</button>
                <button className="counterButton"
                        onClick={decrementCountFunction}
                >-{by}</button>
            </div>

        </div>

    )
}

CountButton.propTypes = {
    by: PropTypes.number
}

CountButton.defaultProps = {
    by: 1
}