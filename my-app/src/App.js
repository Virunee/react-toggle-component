import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleContainer from './components/ToggleContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {correct: false};
  }

  handleChange = (response) => {
    this.setState({correct: response});
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Virunee's Toggle Component</h1>
        </header>
        <ToggleContainer handleChange={this.handleChange} style={this.state.correct}/>
      </div>
    );
  }
}

export default App;
