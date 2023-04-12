import { Component } from "react";
import ChildComponent from "./childComponent";


class ParentComponent extends Component{

    clickUpdate(){
        console.log("this is from parent component")
    }
    render(){
        return(
            <div>
                <ChildComponent Upadte={this.clickUpdate}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent