import { Component } from "react";

class Counter3 extends Component{
    state={
        count:0
    }
    Increment=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render(){
        return (
            <div>
                {this.props.render(this.state.count,this.Increment)}
            </div>
        )
    }
}

export default Counter3;