import React from "react";
import Counter from "../components/counter/index.js";

class CheckCounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      displayForm: false,
    };

    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
  }

  addCounter() {
    this.setState((state) => ({
      numberOfCounters: this.state.numberOfCounters + 1,
    }));
  }

  removeCounter() {
    if (this.state.numberOfCounters) {
      this.setState((state) => ({
        numberOfCounters: this.state.numberOfCounters - 1,
      }));
    }
  }

  render() {
    const allCounters = [];
    for (var i = 0; i < this.state.numberOfCounters; i += 1) {
      allCounters.push(<Counter key={i} number={i} />);
    }

    console.log("allCounters", allCounters, allCounters.length);

    return (
      <Register
        numberOfCounters={this.state.numberOfCounters}
        addCounter={this.addCounter}
        removeCounter={this.removeCounter}
        allCounters={this.allCounters}
      ></Register>
    );
  }
}

export default RegisterContainer;
