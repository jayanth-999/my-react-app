import React, { PureComponent } from 'react';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jayanth',
    };
  }

  handleClick = () => {
    this.setState({ name: 'Varshith' });
  }

  render() {
    return (
      <div>
        
        <h1>Hello, {this.state.name}!</h1>
        <ChildComponent name={this.state.name}/>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}

class ChildComponent extends PureComponent {
  render() {
    console.log('ChildComponent is rendered');
    return (
      <p>My name is {this.props.name}.</p>
    );
  }
}

export default ParentComponent;