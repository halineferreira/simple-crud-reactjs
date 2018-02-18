import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Employees from './Components/Employees'
import AddEmployee from './Components/AddEmployee'
import data from './employees.json'

class App extends Component {
  constructor(){
    super();
    this.state= {
      employees: data
    }
  }
  handleAddEmployee(employee){
    console.log(employee);
    let employees = this.state.employees;
    employees.push(employee);
    this.setState({employees: employees});
  }
  handleDeleteEmployee(nome){
    let employees = this.state.employees;
    //let nome = employees.
  }
  render() {
    return (
      <div className="App">
        <AddEmployee AddEmployee={this.handleAddEmployee.bind(this)}/>
        <Employees employees={this.state.employees} onDelete={this.handleDeleteEmployee.bind(this, index)}/>
      </div>
    );
  }
}

export default App;
