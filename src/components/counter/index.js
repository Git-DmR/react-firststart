import React from "react";

const Counter = ({ handleIncrement, handleDecrement, currentValue, key = 0, number = 0 }) => (
  <div>
    <div>
      <strong>{"Counter_" + (number + 1) + ":  "}</strong>
      {currentValue}
    </div>
    <button onClick={handleIncrement}>Increment.</button>
    <button onClick={handleDecrement}>Decrement.</button>
  </div>
);

export default Counter;
