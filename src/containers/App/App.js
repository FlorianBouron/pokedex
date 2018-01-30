import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Pokedex</h1>
        </header>
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
