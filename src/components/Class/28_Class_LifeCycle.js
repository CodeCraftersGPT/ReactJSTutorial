import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, React!',
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    console.log('Previous state:', prevState.message);
    console.log('Current state:', this.state.message);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  changeMessage = () => {
    this.setState({ message: 'Updated message' });
  };

  render() {
    console.log('Render called');
    return (
      <div>
        <h1>Class Component with Lifecycle Methods</h1>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default LifecycleExample;
