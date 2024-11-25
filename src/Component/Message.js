import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidUpdate(a, b) {
    console.log(
      ` updated: ${b.counter}, to: ${this.state.counter}`
    );
  }

  componentWillUnmount() {
    console.log('Component will unmount.');
  }

  incrementCounter = () => {
    this.setState((b) => ({ counter: b.counter + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Message;
