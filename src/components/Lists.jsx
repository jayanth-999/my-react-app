const { Component } = require("react");

const info = [
    { id: 1, name: 'Jayanth', age: 23 },
    { id: 3, name: 'Varshith', age: 19 },
    { id: 5, name: 'Vamsi', age: 22 }
];

class Lists extends Component{
    
    render(){
    return (
      <ul>{info.map((info) =>
        <li key={info.id}>
        Hi! I am {info.name} and my age is {info.age}
        </li>)}</ul>
    );
  }
}



export default Lists