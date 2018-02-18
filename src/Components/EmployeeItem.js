import React, { Component } from 'react';

class EmployeeItem extends Component {
  deleteEmployee(e) {
    //console.log(index);
    //this.props.onDelete(nome)
    //this.props.actions.deleteEmployee(this.state.employee);
    //this.props.history.push('/')
    //var array = this.props;
  //var index = array.indexOf(e.target.value);
  console.log(e);
  };
  render() {
    //console.log(this.props)
    return (
        <tr className="EmployeeItem">
          <td>{this.props.employee.nome}</td>
          <td>{this.props.employee.email}</td>
          <td class="actions">
            <button type="button" class="btn btn-warning btn-xs">Editar</button>
            <button type="button" class="btn btn-danger btn-xs" onClick={this.deleteEmployee}>Excluir</button>
          </td>
        </tr>
    );
  }
}

export default EmployeeItem;