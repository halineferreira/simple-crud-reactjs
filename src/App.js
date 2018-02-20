import React, { Component } from 'react';
import './App.css';
import Employees from './Components/Employees'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Employees />
      </div>
    );
  }
}
export default App;