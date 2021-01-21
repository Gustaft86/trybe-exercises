import React, { Component } from 'react';

import './Form.css';

import DadosPessoais from './DadosPessoais';
import FormErrors from './FormErrors';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      hasEntered: false,
      formErrors: {email: '', password: ''},
    };
  }

  handleChange = event => {
    let { name, value } = event.target;

    if(name === 'name') value = value.toUpperCase()

    if(name === 'address') value = this.validateAddress(value)

    this.updateState(name, value)
  }
  
  // ----------------------------------------------------------
  // Parte copiada do gabarito, precisa enteder os Regex

  onBlurHandler = event => {
    let { name, value } = event.target;

    if(name === 'city') value = value.match(/^\d/) ? '' : value

    this.updateState(name, value)
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

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
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

  // ------------------------------------------------------------

  render() {
    return (
      <div>
        <h1>Estados e React - Cadastro de Curriculo</h1>
        <form className='form'>
          <DadosPessoais value={this.state} handleChange={this.handleChange} onBlurHandler={this.onBlurHandler} />

          <fieldset>
            <legend>Dados profissionais:</legend>
              <div className="container">
                Resumo do currículo:
                <textarea
                  name="resume"
                  maxLength="1000"
                  required
                  value={this.state.resume}
                  onChange={this.handleChange}
                />
              </div>
              <div className="container">
                Cargo:
                <input
                  type="text"
                  name="role"
                  maxLength="40"
                  required
                  value={this.state.role}
                  onChange={this.handleChange}
                  onMouseEnter={() => {
                    alert('Preencha com cuidado esta informação.');
                  }}
                />
              </div>
              <div className="container">
                Descrição do cargo:
                <textarea
                  name="roleDescription"
                  maxLength="500"
                  value={this.state.roleDescription}
                  onChange={this.handleChange}
                />
              </div>
            </fieldset>
        </form>
        <div className="container">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

export default Form;