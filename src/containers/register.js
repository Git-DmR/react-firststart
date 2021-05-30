import React from "react";
import Register from "../components/register/index.js";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      displayForm: false,
      currentValue: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.changeFormStatus = this.changeFormStatus.bind(this);
    this.idIncrement = this.idIncrement.bind(this);
    this.idDecrement = this.idDecrement.bind(this);
  }

  componentDidMount() {
    console.log("didMount:", this);
  }

  idIncrement() {
    this.setState((state) => ({
      id: this.state.id + 1,
    }));
  }

  idDecrement() {
    this.setState((state) => ({
      id: this.state.id - 1,
    }));
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

  handleAddCounter() {}

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
        elementId={this.state.id}
      />
    );
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }
}

export default RegisterContainer;
