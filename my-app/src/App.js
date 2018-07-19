import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButton from 'react-toggle-button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: false};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ToggleButton
  value={ this.state.value || false }
  onToggle={(value) => {
    this.setState({
      value: !value,
    })
  }} />
      </div>
    );
  }
}

export default App;
