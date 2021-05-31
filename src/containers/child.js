import React from "react";

class AppComponent extends React.Component {
  state = {
    numChildren: 0,
  };

  render() {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent key={i} number={i} />);
    }

    return (
      <ParentComponent numChildren={this.state.numChildren} addChild={this.onAddChild}>
        {children}
      </ParentComponent>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1,
    });
  };
}

const ParentComponent = (props) => (
  <div>
    <p>
      <strong>Total of Counters: {props.numChildren}</strong>
    </p>
    <button onClick={props.addChild}>Add Counter</button>
    <div>{props.children}</div>
  </div>
);

const ChildComponent = (props) => <div>{"I am child " + props.number}</div>;

export default AppComponent;
