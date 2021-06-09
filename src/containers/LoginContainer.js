import React from "react";
import Login from "../components/login";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    const OnLoginUser = (login) => {
      console.log(login, "Params");
    };

    return <Login onLogin={OnLoginUser} refInput={this.textInput} focusTextInput={this.focusTextInput} />;
  }
}

export default LoginContainer;
