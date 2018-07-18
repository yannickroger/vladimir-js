import React, { PureComponent } from "react";
import "./LettersDisplayerItem.css";

export class LettersDisplayerItem extends PureComponent {
  render() {
    return (
      <li>
        <span className="letter">{this.props.letter}</span>
        <span className="number">{this.props.number}</span>
      </li>
    );
  }
}
