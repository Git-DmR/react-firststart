import React from "react";
import Register from "../components";

class RegisterContainer extends React.Component {
  render() {
    let firstValue = "QQ";

    const onChangeUser = (event) => {
      console.log(event.target.value);
      const value = event.target.value;
      let disabledStatus = value === "Artem";
      console.log("new disabledStatus is ", disabledStatus);
    };

    return <Register firstValueForTextField={firstValue} onChangeUser={onChangeUser} />;
  }
}

export default RegisterContainer;
