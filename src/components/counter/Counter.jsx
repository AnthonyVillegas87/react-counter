


import './Counter.css'



export default function Counter() {


    function incrementCountFunction() {
        console.log('clicked')
    }


    return (
        <div className="Counter">

            <span className="count">0</span>
            <div>
                <button className="counterButton"
                        onClick={incrementCountFunction}
                >+1</button>
            </div>

        </div>

    )
}