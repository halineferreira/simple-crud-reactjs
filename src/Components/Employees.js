import React, { Component } from 'react';
//import EmployeeItem from './EmployeeItem';

class Employees extends Component {
  deleteEmployee(nome){
    //this.props.onDelete(name);
  }
  render() {
    //console.log(this.state.employees);
    return (
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
              <tbody>
                <tr className="EmployeeItem">
                  <td>{/*this.props.employee.nome*/}</td>
                  <td>{/*this.props.employee.email*/}</td>
                  <td class="actions">
                    <button type="button" class="btn btn-warning btn-xs">Editar</button>
                    <button type="button" class="btn btn-danger btn-xs" onClick={this.deleteEmployee}>Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Employees;
