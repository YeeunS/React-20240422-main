import React, { Component } from "react";

export class PureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initialize state with a count
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    nextState ??= {};
    this.state ??= {};
    nextProps ??= {};
    this.props ??= {};

    const isStateEqual = Object.keys(nextState).every(
      (key) => nextState[key] === this.state[key]
    );

    const isPropsEqual = Object.keys(nextProps).every(
      (key) => nextProps[key] === this.props[key]
    );

    return !(isStateEqual && isPropsEqual);
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { title, content, items } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>Count: {count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>

        <ul>
          {items && items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default PureComponent;
