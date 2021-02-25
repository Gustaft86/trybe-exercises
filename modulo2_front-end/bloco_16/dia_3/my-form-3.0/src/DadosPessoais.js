import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addName as addNameAction } from './actions';

class DadosPessoais extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.validateAddress = this.validateAddress.bind(this);
    this.validateField = this.validateField.bind(this);
  }
  
  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value)
      }
    }));
  }

  handleChange(event) {
    let { name, value } = event.target;
    if(name === 'name') value = value.toUpperCase()
    if(name === 'address') value = this.validateAddress(value)
    this.updateState(name, value)
  }

  onBlurHandler(event) {
    let { name, value } = event.target;
    if(name === 'city') value = value.match(/^\d/) ? '' : value
    this.updateState(name, value)
  }

  validateAddress(address) {
    return address.replace(/[^\w\s]/gi, '')
  }

  validateField(fieldName, value) {
    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }

    return '';
  }

  render() {
    const { name, email, cpf, address, city, countryState } = this.state;
    const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Nome"
          maxLength="40"
          required
          onChange={this.handleChange}
        />
        <input
          type="email"  
          name="email"
          value={email}
          placeholder="E-mail"
          maxLength="50"
          required
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="cpf"
          value={cpf}
          placeholder="CPF"
          maxLength="11"
          required
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="address"
          value={address}
          placeholder="Endereço"
          maxLength="200"
          required
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Cidade"
          maxLength="28"
          required
          onBlur={this.onBlurHandler}
          onChange={this.handleChange}
        />
        <select
          name="countryState"
          value={countryState}
          placeholder="Estado"
          required
          onChange={this.handleChange}
        >
          {/* hidden - esconde a opção no select */}
          {/* disabled - não permite que a opção seja selecionada */}
          {/* selected - inicia o campo com a opção selecionada */}
          <option value="" selected disabled hidden>Estado</option>
          {states.map((value, key) => <option key={key}>{value}</option>)}
        </select>
      </fieldset>
    )
  }
}

const mapDispatchToProps = ((dispatch) => ({
  addName: (name) => dispatch(addNameAction(name))
}));

export default connect(null, mapDispatchToProps)(DadosPessoais);
