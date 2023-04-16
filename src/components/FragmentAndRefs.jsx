import React,{ Component } from "react";

class FragmentAndRefs extends Component{
    constructor(){
        super()
        this.ref=React.createRef()
    }
    handleClick=()=>{
        this.ref.current.focus();
    }
    render(){
        return(
            <React.Fragment>
                <input type="text"  ref={this.ref} className="text" />
                <button onClick={this.handleClick}>click me</button>
            </React.Fragment>
        )
    }
}

export default FragmentAndRefs