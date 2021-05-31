import React from "react";
import Register from "../components/register";

class RegisterContainer extends React.Component {
  render() {
    const initialFormValues = {
      email: "",
      firstName: "",
      secondName: "",
    };
    return <Register initialFormValues={initialFormValues} />;
  }
}

export default RegisterContainer;
