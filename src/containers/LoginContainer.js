import React from "react";
import Login from "../components/login";
import { connect } from "react-redux";
import { loginRequest } from "../actions/index";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  testMethod = () => {
    console.log("Button has been pressed!!");
    this.props.loginRequest("PAYLOAD from test method");
  };

  render() {
    const OnLoginUser = (login) => {
      console.log(login, "Params");
    };

    return (
      <Login
        onLogin={OnLoginUser}
        refInput={this.textInput}
        focusTextInput={this.focusTextInput}
        testMethod={this.testMethod}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (value) => dispatch(loginRequest(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
