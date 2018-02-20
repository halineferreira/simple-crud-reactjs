import React, { Component } from 'react';
import data from '../employees.json'
import { Button, Modal, ModalHeader, Fade, utils } from 'react-bootstrap'
import { Modal as ReactOverlayModal } from 'react-overlays'
let pos;

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state= {
      employees: data,
      show: false
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

    addEmployee(e){
      e.preventDefault();
      if (this.refs.nome.value === ''|| this.refs.email.value === '')
          alert('Preencha todos os campos');
      else {
          
          let nome = this.refs.nome.value;
          let email =  this.refs.email.value;
          let newEmployee =  { nome, email};
          let employees = this.state.employees;
  
          employees.push(newEmployee);
  
          this.setState({ employees: employees});
          this.refs.addEmployeeForm.reset();
      }
    }

    carregarEmployee(i){
      this.refs.updateEmployeeForm.newNome.value = this.state.employees[i].nome;
      this.refs.updateEmployeeForm.newEmail.value = this.state.employees[i].email;
      pos = i;
    }

    updateEmployee(e){
      if (this.refs.updateEmployeeForm.newNome.value === ''|| this.refs.updateEmployeeForm.newEmail.value === '')
          alert('Preencha todos os campos');
      else {
          let employees = this.state.employees;

          employees[pos].nome = this.refs.updateEmployeeForm.newNome.value;
          employees[pos].email = this.refs.updateEmployeeForm.newEmail.value;

          this.setState({ employees: employees});
          this.refs.updateEmployeeForm.reset();
      }
      e.preventDefault();
    }

    deleteEmployee(index) {
        let employees = this.state.employees;

        employees.splice(index, 1);
        this.setState({ employees });

     };
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

  render() {
    return (
          <div className="App">
            <form ref="updateEmployeeForm" onSubmit={this.updateEmployee.bind(this)}>
              <input type="text" ref="newNome" className="form-control" name="newNome" id="newNome" placeholder="Nome"/>
              <input type="text" ref="newEmail" className="form-control" name="newEmail" id="newEmail" placeholder="Email"/>
              <button type="submit" className="btn btn-primary">Salvar</button>
            </form>

            <h1>Cadastro de Funcionários</h1>
            <form ref="addEmployeeForm" onSubmit={this.addEmployee.bind(this)}>
              <div className="row">
                <div className="col">
                    <input type="text" ref="nome" className="form-control" name="nome" id="nome" placeholder="Nome"/>
                </div>
                <div className="col">
                    <input type="email" ref="email" className="form-control" name="email" id="email" placeholder="Email"/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary">Adicionar</button>
                </div>
              </div>
            </form>
            <br/>
            <div className="Employees">
              <div id="list" className="row">
                <div className="table-responsive col-md-12">
                  <table className="table table-striped table-condensed" cellSpacing="0" cellPadding="0">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th className="actions">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="EmployeeItem">
                      {this.state.employees.map((employee, index) => 
                        <tr key={index}>
                          <td>{employee.nome}</td>
                          <td>{employee.email}</td>
                          <td className="actions">
                            <button type="button" className="btn btn-warning btn-xs" onClick={() => this.carregarEmployee(index)}>Editar</button>
                            <button type="button" className="btn btn-danger btn-xs" onClick={() => this.deleteEmployee(index)}>Excluir</button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          <div>
        </div>
      </div>
    );
  }
}
export default App;