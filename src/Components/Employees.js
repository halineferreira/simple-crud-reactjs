import React, { Component } from 'react';
import EmployeeItem from './EmployeeItem';

class Employees extends Component {
  deleteEmployee(nome){
    //this.props.onDelete(name);
  }
  render() {
    let employeeItems;
    if(this.props.employees){
      employeeItems = this.props.employees.map((employee, index) => {
        //console.log(employee);
        return (
        <EmployeeItem onDelete={this.deleteEmployee.bind(this)} key={index} employee={employee}/>
        )
      })
    }

    //console.log(this.props)

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
              {employeeItems}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
