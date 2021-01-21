import React, { Component } from 'react'

class DadosPessoais extends Component {
  render() {
    const { value, handleChange, onBlurHandler } = this.props;
    const { name, email, cpf, address, city, countryState, addressType, resume, role, roleDescription, hasEntered } = value;
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
          onChange={handleChange}
        />
        <input
          type="email"  
          name="email"
          value={email}
          placeholder="E-mail"
          maxLength="50"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="cpf"
          value={cpf}
          placeholder="CPF"
          maxLength="11"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          value={address}
          placeholder="Endereço"
          maxLength="200"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Cidade"
          maxLength="28"
          required
          onBlur={onBlurHandler}
          onChange={handleChange}
        />
        <select
          name="countryState"
          value={countryState}
          placeholder="Estado"
          required
          onChange={handleChange}
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

export default DadosPessoais;
