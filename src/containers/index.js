import React from "react";
import Register from "../components";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTextFieldDisabledStatus: true,
      currentValue: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    console.log("didMount:", this);
  }

  handleIncrement() {
    this.setState((state) => ({
      currentValue: this.state.currentValue + 1,
    }));
  }

  handleDecrement() {
    this.setState((state) => ({
      currentValue: this.state.currentValue - 1,
    }));
  }

  handleOnChange() {
    this.setState((state) => ({
      firstTextFieldDisabledStatus: false,
    }));
  }

  render() {
    let firstValue = "QQ";

    return (
      <Register
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        currentValue={this.state.currentValue}
        firstValueForTextField={firstValue}
      />
    );
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }
}

export default RegisterContainer;
