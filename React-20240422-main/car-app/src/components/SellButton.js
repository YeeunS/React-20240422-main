import React, { Component } from "react";

export default class SellButton extends Component {
  render() {
    const { hanldleSellCar, id } = this.props;
    return <button onClick={() => handleSellCar(id)}>sell</button>;
  }
}
