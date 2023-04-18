import { Component } from "react";
import Counter3 from "./Counter3";
import Counter4 from "./Counter4";

class RenderingProps extends Component {
    render() {
        return (
            <div>
                <div>
                    <Counter3 render={(count, Increment) => (
                        <div>
                            <h2>Counter 3: {count}</h2>
                            <button onClick={Increment}>Increment</button>
                        </div>
                    )} />
                </div>
                <div>
                    <Counter4 render={(count, Increment) => (
                        <div>
                            <h2>Counter 4: {count}</h2>
                            <button onClick={Increment}>Increment</button>
                        </div>
                    )} />
                </div>
            </div>
        )
    }
}

export default RenderingProps