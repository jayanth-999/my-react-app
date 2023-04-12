import { Component } from "react";


class ChildComopnent extends Component{
   
    render(){
        return (
            <div>
                <button onClick={this.props.Upadte}> click me</button>
            </div>
        )
    }
}

export default ChildComopnent