import React, { Component } from "react";

export default class TotalQuantity extends Component {
  render() {
    // this.props is object
    const { totalQuantity } = this.props;
    return <div>TotalQuantity: {totalQuantity}</div>;
  }
}
