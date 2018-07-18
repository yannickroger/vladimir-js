import React, { Component } from "react";

import "./App.css";
import { LettersDisplayer } from "./components/LettersDisplayer";
import { UserInput } from "./components/UserInput";
import { lettersMap } from "./modules/cyrillicNumbers/calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Letter/number</h1>
        </header>

        <section className="calculator">
          <UserInput placeholder="Enter the word" />
          <div className="letters">
            <LettersDisplayer letters={lettersMap} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
