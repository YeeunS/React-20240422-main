import { createStore } from "redux";

const carsInitialValue = [
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
    brand: "mercedes",
    number: 30,
    id: 3,
  },
];

const carReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELL":
      return state.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            number: item.number - 1,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export const store = createStore(carReducer);
