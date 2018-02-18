import React, { Component } from 'react';

class AddEmployee extends Component {
    constructor() {
        super();
        this.state= {
            newEmployee:{

            }
        }
    }
  addItem(e){
      if (this.refs.nome.value === ''|| this.refs.nome.email === '')
          alert('Preencha todos os campos');
      else {
          this.setState({newEmployee: {
              nome: this.refs.nome.value,
              email: this.refs.email.value
            }}, function(){ 
                //console.log(this.state)
                //console.log(this.props);
                this.props.AddEmployee(this.state.newEmployee);
            });
      }
    //console.log(this.refs.nome.value);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Cadastro de Funcionários</h1>
        <form onSubmit={this.addItem.bind(this)}>
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
      </div>
    );
  }
}

export default AddEmployee;
