import React, { Component } from 'react';

// Child Component
class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onButtonClick}>Click me</button>
      </div>
    );
  }
}

// Parent Component
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, World!'
    };
  }

  // A method to be passed as a prop to the child component
  handleButtonClick = () => {
    this.setState({ message: 'Button Clicked!' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Pass the method as a prop to the child component */}
        <ChildComponent onButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default ParentComponent;
