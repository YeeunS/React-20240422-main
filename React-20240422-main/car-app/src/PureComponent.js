import React, { Component } from "react";

export default class PureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    nextState ??= {};
    this.state ??= {};
    nextProps ??= {};
    this.props ??= {};

    const isStateEqual =
      Object.keys(nextState).every(
        (key) => nextState[key] === this.state[key]
      ) &&
      Object.keys(this.state).every((key) => nextState.hasOwnProperty(key));

    const isPropsEqual =
      Object.keys(nextProps).every(
        (key) => nextProps[key] === this.props[key]
      ) &&
      Object.keys(this.props).every((key) => nextProps.hasOwnProperty(key));

    return !(isPropsEqual && isStateEqual);
  }

  render() {
    return <div>Pure Component</div>;
  }
}
