import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.btnPLus = this.btnPLus.bind(this);
    this.btnMins = this.btnMins.bind(this);
  }

  btnPLus = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  btnMins = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>ini adalah class Component (rcc)</h1>
        <h2>Hallo {this.props.name} (ini props)</h2>
        <h3>dibawah ini adalah state</h3>
        <button onClick={this.btnMins}>-</button>
        <span> {this.state.number} </span>
        <button onClick={this.btnPLus}>+</button>
      </div>
    );
  }
}
