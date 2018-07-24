import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleContainer from './components/ToggleContainer';

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
          <h1 className="App-title">Virunee's Toggle Component</h1>
        </header>
        <ToggleContainer message="This is a message!" correct={true}/>
      </div>
    );
  }
}

export default App;
