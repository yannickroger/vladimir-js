import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import {LettersDisplayer} from "./components/LettersDisplayer";
import {UserInput} from "./components/UserInput";
import {lettersMap} from './modules/cyrillicNumbers/calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
            <UserInput/>
        </p>

          <LettersDisplayer letters = {lettersMap}/>
      </div>
    );
  }
}

export default App;
