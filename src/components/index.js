import React from "react";
import TextField from "@material-ui/core/TextField";

const Register = ({
  displayForm,
  handleDisplayFormStatus,
  handleIncrement,
  handleDecrement,
  currentValue,
  disabledStatus,
}) => {
  console.log({ disabledStatus });
  console.log();
  return (
    <div>
      {displayForm && (
        <form>
          <TextField label="Ha-ha" />
          <TextField label="QQ" disabled={disabledStatus} />
          <TextField label="Outlined" required />
        </form>
      )}
      <div>
        <div>{currentValue}</div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleDisplayFormStatus}>Change</button>
      </div>
    </div>
  );
};

export default Register;
