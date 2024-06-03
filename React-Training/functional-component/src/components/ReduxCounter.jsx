import React from "react";
import { useDispatch } from "react-redux";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => {}}>add</button>
      <button onClick={() => dispatch(Add)}>add</button>
    </div>
  );
};

export default ReduxCounter;
