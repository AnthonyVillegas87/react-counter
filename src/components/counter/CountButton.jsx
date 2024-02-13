import {PropTypes} from "prop-types";

export default function CountButton({by, incrementFunction, decrementFunction}) {


    // function incrementCountFunction() {
    //     incrementFunction(by)
    // }

    // function decrementCountFunction() {
    //     decrementFunction(by)
    // }

    return (
        <div className="Counter">

            <div>
                <button className="counterButton"
                        onClick={() => incrementFunction(by)}
                >+{by}</button>
                <button className="counterButton"
                        onClick={() => decrementFunction(by)}
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