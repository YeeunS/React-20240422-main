import React, { Component } from "react";
import Car from "./Car";
import TotalQuantity from "./TotalQuantity";

/*

        A
    B       C
D      E       F
     G

D B E G: common component is B which is better than A
D B E G C: A



          CarApp
    Car         TotalQuantitiy
  SellButton

one way data flow: prop from parents to child 
    props drilling (draw back):
        in order pass prop/data to a descendent compoenet, you have to pass it by all the descendent compoenent betweeen them.
        cause: manage state in least common parent component
    state lifting: they are describing the same thing
                   lifting the component to share to up
from child to parent: callback

shouldComponentUpdate:
    what: lifecycle method of react class component
    why: to decide whether to proceed the render proceess
    how: by comparing old state/props with the new state/props, conditionally returning boolean

by default parent rendering will trigger child rendering

toyota: dom render, render method: called
ford: dom not render, render method: called
mercedez: dom not render, render method: called

*/
export default class CarApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {
          brand: "toyota",
          number: 10,
          id: 1,
        },
        {
          brand: "ford",
          number: 20,
          id: 2,
        },
        {
          brand: "mercedez",
          number: 30,
          id: 3,
        },
      ],
    };
  }

  handleSellCar = (id) => {
    // update state
    this.setState({
      cars: this.state.cars.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            number: item.number - 1,
          };
        } else {
          return item;
        }
      }),
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("SCU", nextState, this.state); // this.state is the old state
    return false;
  }

  render() {
    const totalQuantity = this.state.cars.reduce((acc, cur) => {
      return acc + cur.number;
    }, 0);
    return (
      <div className="car-app">
        <TotalQuantity totalQuantity={totalQuantity} />
        <div className="cars-container">
          {this.state.cars.map((item) => {
            <Car
              key={item.id}
              item={item}
              handleSellCar={this.handleSellCar}
            />;
          })}
        </div>
      </div>
    );
  }
}

//create virtual dom(newer ver) based the jsx
//diffing (old)
//reconciliation (based on diffing algorithm)
//componentDidUpdate
