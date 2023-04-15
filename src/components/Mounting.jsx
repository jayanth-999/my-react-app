import { Component } from "react";

class Mounting extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"jayanth",
            val:""
        }
        this.Update=this.Update.bind(this)
    }

    
    changeName=(event)=>
    {    
        this.setState({
            val:event.target.value
            
        })  
        // console.log(this.state.name) 
    }

    componentDidUpdate(){
         console.log("compnent did update has been called")
         console.log("updated state:", this.state);
         return false;
    }
    shouldComponentUpdate() {
        console.log("should component update has been called");
        return false;
      }
    Update(){
        this.setState({
            name:this.state.val
        })
        console.log("updating name");
        console.log("state after update:", this.state);
        
    }
    render(){
        return (
            <div>
                <h2>{this.state.name}</h2>
                <input type="text" value={this.state.val} id="name" onChange={this.changeName}/>
                <button onClick={this.Update}>click me</button>
            </div>
        )
    }
}

export default Mounting