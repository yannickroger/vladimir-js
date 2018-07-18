import React, { Component } from "react";
import "./UserInput.css";
import { calculate } from "../modules/cyrillicNumbers/calculator";

export class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      score: "",
      notFound: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const result = calculate(event.target.value);

    this.setState({
      value: event.target.value,
      score: result.score,
      notFound: result.notFound
    });
  }

  // TODO components for result

  render() {
    return (
      <div>
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />

        <p>Result : {this.state.score}</p>

        <p> Not found : {this.state.notFound}</p>
      </div>
    );
  }
}
