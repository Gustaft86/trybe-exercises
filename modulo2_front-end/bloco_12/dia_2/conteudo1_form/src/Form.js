import React, { Component } from 'react';
import './Form.css';
import EstadoFavorito from './EstadoFavorito';
import DadosPessoais from './DadosPessoais'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

  //   this.state = {
  //     estadoFavorito: '',
  //   };
  // }

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      arquivo: ''
    };
  }

  // handleChange(event) {
  //   this.setState({
  //     estadoFavorito: event.target.value,
  //   });
  // }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className='form'>
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
          <DadosPessoais value={this.state} handleChange={this.handleChange} />
          <label>
            Confirma sua presença?
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Escolha sua palavra chave favorita:
            <select
              name="palavraChaveFavorita"
              value={this.state.palavraChaveFavorita}
              onChange={this.handleChange}>
              <option value="Componente">Componente</option>
              <option value="Estado">Estado</option>
              <option value="Evento">Evento</option>
              <option value="Props">Props</option>
            </select>
          </label>
          {/* componente não controlado */}
          <input 
            type="file"
            value={this.state.arquivo}
          />
        </form>
      </div>
    );
  }
}

export default Form;
