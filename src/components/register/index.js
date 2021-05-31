import React from "react";

const Register = ({ numberOfCounters, addCounter, removeCounter }) => (
  <div>
    <div>
      <strong>Number of Counters: </strong>
      {numberOfCounters}
    </div>
    <button onClick={addCounter}>Add Counter.</button>
    <button onClick={removeCounter}>Remove Counter.</button>
  </div>
);

export default Register;
