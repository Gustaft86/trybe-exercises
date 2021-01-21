import React, { Component } from 'react'

class DadosPessoais extends Component {
  render() {
    const { value, handleChange } = this.props;
    const { email, nome, idade } = value;
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <input
          type="email"  
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          type="text"
          name="nome"
          value={nome}
          placeholder="Nome"
          onChange={handleChange}
        />
        <input
          type="text"
          name="idade"
          value={idade }
          placeholder="Idade"
          onChange={handleChange}
        />
      </fieldset>
    )
  }
}

export default DadosPessoais;
