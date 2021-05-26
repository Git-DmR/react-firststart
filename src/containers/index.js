import React from "react";
import Register from "../components";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      currentValue: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.changeFormStatus = this.changeFormStatus.bind(this);
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

  changeFormStatus() {
    this.setState((state) => ({
      displayForm: !this.state.displayForm,
    }));
  }

  render() {
    return (
      <Register
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleDisplayFormStatus={this.changeFormStatus}
        displayForm={this.state.displayForm}
        currentValue={this.state.currentValue}
      />
    );
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }
}

export default RegisterContainer;
