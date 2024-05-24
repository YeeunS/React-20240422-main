import React, { useState } from "react";

// React.memo, useCallback (cache a function), useMemo (cache a value)

const Counter = () => {
  cons[(count, setCount)] = useState(0);

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add </button>
      <A />
    </div>
  );
};

// component rerender: state, props, parent, content
const A = () => {
  console.log("component A rerender");
  return <div>Component A</div>;
};

export default Counter;
