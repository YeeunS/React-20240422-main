import React, { useState } from "react";

// component A -> counter: 0
// click alert, and then click add one
// rerender -> component B
// after 3s, alert -> component A

export const FunctionalApp = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef();
  counterRef.current = counter;

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add one</button>
      <button
        onClick={() => {
          setTimeout(() => {
            alert(counterRef.current);
          }, 3000);
        }}
      >
        Alert counter value
      </button>
    </div>
  );
};

export class ClassApp extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          Add one
        </button>
      </div>
    );
  }
}
