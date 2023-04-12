import { Component } from "react";

class ListComponent extends Component{

    render(){
        const mylist=['toys','fruits','machines','books']
        return (
            <div>{
                mylist.map(item=>(
                    <h3 key={item}>{item}</h3>
                ))}
            </div>
        )
    }
}

export default ListComponent