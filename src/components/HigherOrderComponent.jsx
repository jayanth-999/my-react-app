import React, { Component } from "react";

const IncrementCounter = (WrappedComonent) => {
    class WithIncrementCounter extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
            this.IncrementCount = this.IncrementCount.bind(this);
        }
        IncrementCount() {
            this.setState(
                (prevState) => ({ count: prevState.count + 1 })
            );
        }
        render() {
            return (
                <WrappedComonent IncrementCount={this.IncrementCount} count={this.state.count} />
            )
        }
    }
    return WithIncrementCounter;
}

export default IncrementCounter;
