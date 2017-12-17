import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </div>
        <p className="App-intro">
          To get started, editiiiiiiiiii <code>src/App.js</code> and save to reload.
        </p>
          {this.props.children}
      </div>
    );
  }
}

export default App;
