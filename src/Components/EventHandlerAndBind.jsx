import React, { Component } from "react";

class SampleComponent extends Component{
    constructor(){
        super()
        this.state={
            statement:"this is sample"
            
        };
        this.clickUpdate=this.clickUpdate.bind(this)
        this.clickHover=this.clickHover.bind(this)
    }

    clickUpdate(){
        this.setState({
            statement:"you have clicked",
           
        })
    }
    clickHover(){
        this.setState({
            statement:"you hover over the button"
        })
    }
    render(){
        // console.log(this)
        return (
            <div>
               <h3>{this.state.statement}{this.state.ccount}</h3>
               
               <button onClick={this.clickUpdate} onMouseOver={this.clickHover}>Click me</button>
            </div>
        )
    }
}

export default SampleComponent