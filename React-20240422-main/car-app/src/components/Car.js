import React, { Component } from "react";
import SellButton from "./SellButton";

export default class Car extends Component {
  render() {
    const { item, handleSellCar } = this.props;
    return (
      <div>
        <div>toyota</div>
        <div>{item.brand}</div>
        <div>{item.number}</div>
        <SellButton handleSellCar={handleSellCar} />
      </div>
    );
  }
}
