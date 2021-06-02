import React from "react";
import Register from "../components/register";

class RegisterContainer extends React.Component {
  render() {
    const initialFormValues = {
      email: "",
      firstName: "",
      secondName: "",
    };
    const OnRegisterUser = (register) => {
      console.log("Params: ", register);
      console.log("firstName:", register.firstName);
      console.log("firstName trim:", register.firstName.trim());
    };

    return <Register initialFormValues={initialFormValues} onRegister={OnRegisterUser} />;
  }
}

export default RegisterContainer;
