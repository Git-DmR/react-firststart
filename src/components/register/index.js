import React from "react";
import TextField from "@material-ui/core/TextField";

const Register = ({
  displayForm,
  handleDisplayFormStatus,
  handleIncrement,
  handleDecrement,
  currentValue,
  disabledStatus,
  elementId,
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
        <div>
          <strong>Counter_{elementId}: </strong>
          {currentValue}
        </div>
        <button onClick={handleIncrement}>Increment.</button>
        <button onClick={handleDecrement}>Decrement.</button>
        <button onClick={handleDisplayFormStatus}>Change visibility.</button>
        <button onClick={handleIncrement}>Add.</button>
      </div>
    </div>
  );
};

export default Register;
