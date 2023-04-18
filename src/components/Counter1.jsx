import { Component } from "react";
import IncrementCounter from "./HigherOrderComponent";


class Counter1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.log("Error in Counter1:", error)
        console.log("info :", info.Component)
    }
    render() {
        if (this.state.hasError) {
            return <p>Something went wrong in Counter1 component.</p>;
        }
        return (
            <div>
                <h2>Counter 1: {this.props.count}</h2>
                <button onClick={this.props.IncrementCount}>increment</button>
            </div>
        )
    }
}


export default IncrementCounter(Counter1)