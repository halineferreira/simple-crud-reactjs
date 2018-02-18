import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Employees from './Components/Employees'
//import AddEmployee from './Components/AddEmployee'
import data from './employees.json'
import { Button, Modal} from 'react-bootstrap'


class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state= {
      employees: data,
      show: false
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  addEmployee(e){
    e.preventDefault();
    if (this.refs.nome.value === ''|| this.refs.nome.email === '')
        alert('Preencha todos os campos');
    else {
        
        let nome = this.refs.nome.value;
        let email =  this.refs.email.value;
        let newEmployee =  { nome, email};
        let employees = this.state.employees;

        employees.push(newEmployee);

        this.setState({ employees: employees});
        this.refs.addEmployeeForm.reset();

        console.log(this.state.employees);
    }
  }
   deleteEmployee(index) {
      console.log(index);
   };


  render() {
    
    return (
      <div className="App">
        <h1>Cadastro de Funcionários</h1>
        <form ref="addEmployeeForm" onSubmit={this.addEmployee.bind(this)}>
            <div class="row">
                <div class="col">
                    <input type="text" ref="nome" class="form-control" name="nome" id="nome" placeholder="Nome"/>
                </div>
                <div class="col">
                    <input type="email" ref="email" class="form-control" name="email" id="email" placeholder="Email"/>
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-primary">Adicionar</button>
                </div>
            </div>
        </form>
        <div className="Employees">
        <div id="list" class="row">
          <div class="table-responsive col-md-12">
            <table class="table table-striped table-condensed" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th class="actions">Ações</th>
                </tr>
              </thead>
              <tbody className="EmployeeItem">
                {this.state.employees.map((employee, index) => 
                  <tr key={index}>
                    <td>{employee.nome}</td>
                    <td>{employee.email}</td>
                    <td class="actions">
                      <button type="button" class="btn btn-warning btn-xs">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs" onClick={this.deleteEmployee(null, index)}>Excluir</button>
                    </td>
                  </tr>
              ) }
                  
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
//<AddEmployee AddEmployee={this.handleAddEmployee.bind(this)}/>
//<Employees employees={this.state.employees} onDelete={this.handleDeleteEmployee.bind(this)}/>