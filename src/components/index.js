import React from "react";
import TextField from "@material-ui/core/TextField";

const Register = ({ firstValueForTextField, disabledStatus, onChangeUser }) => {
  console.log({ firstValueForTextField, disabledStatus, onChangeUser });
  console.log();
  return (
    <form>
      <TextField label={firstValueForTextField} onChange={onChangeUser} />
      <TextField label="Filled" disabled={disabledStatus} />
      <TextField label="Outlined" required />
    </form>
  );
};

export default Register;
