import { Component } from "react";
import IncrementCounter from "./HigherOrderComponent";

class Counter2 extends Component {
    render() {
        return (
            <div>
                <h2>Counter 2: {this.props.count}</h2>
                <button onClick={this.props.IncrementCount}>increment</button>

            </div>
        )
    }
}

export default IncrementCounter(Counter2)