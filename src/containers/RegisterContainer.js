import React from "react";
import Register from "../components/register";
import Example from "../components/example";

class RegisterContainer extends React.Component {
  render() {
    const initialFormValues = {
      email: "",
      firstName: "",
      secondName: "",
    };
    return <Register initialFormValues={initialFormValues} example={<Example />} />;
  }
}

export default RegisterContainer;
