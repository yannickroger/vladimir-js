import React, { PureComponent } from "react";
import "./LetterDisplayer.css";
import { LettersDisplayerItem } from "./LettersDisplayerItem";

export class LettersDisplayer extends PureComponent {
  render() {
    const listItems = [];

    this.props.letters.forEach((number, letter) => {
      listItems.push(
        <LettersDisplayerItem key={letter} letter={letter} number={number} />
      );
    });

    return <ul className="list">{listItems}</ul>;
  }
}
