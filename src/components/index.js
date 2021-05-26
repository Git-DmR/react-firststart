import React from "react";
import TextField from "@material-ui/core/TextField";

const Register = ({ handleIncrement, handleDecrement, currentValue, firstValueForTextField, disabledStatus }) => {
  console.log({ firstValueForTextField, disabledStatus });
  console.log();
  return (
    <div>
      <form>
        <TextField label={firstValueForTextField} onChange={true} />
        <TextField label="QQ" disabled={disabledStatus} />
        <TextField label="Outlined" required />
      </form>
      <div>
        <div>{currentValue}</div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Register;
