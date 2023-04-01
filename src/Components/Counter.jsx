import React from "react";


class Counter extends React.Component{
    state={
        counter:0
    }
    constructor(){
        super();
        this.incrementer=this.incrementer.bind(this)
        this.update=this.update.bind(this)
    }
    
    render(){
        return (
            <div>
            <h2 id="inc">Counter:{this.state.counter}</h2>
            {/* <button onClick={()=>this.setState({counter:this.state.counter+1})}>update</button> */}
            <button onClick={this.incrementer} onMouseOver={this.update}>update</button>

            </div>
        )
    }
    update(){
        console.log(this.state);
    }
    
    incrementer(){
        this.setState({
            counter:this.state.counter+1
        })
    }
}

export default Counter;

