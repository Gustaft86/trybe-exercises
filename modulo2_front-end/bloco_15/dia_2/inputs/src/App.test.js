// App.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App';


it('alterando o valor do input NOME e testando o valor guardado', () => {
  const { getByTestId } = render(<App />);
  const inputNome = getByTestId('input-nome');  // selecionando com o data-testid
  expect(inputNome).toHaveValue('');  // verifica se input selecionado testá vazio
  fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } }); // fireEvent.<tipo Evento>(elemento selecionado, obj evento)
  expect(inputNome).toHaveValue('Estudante da Trybe');  // verifica se input selecionado tem o texto
});

it('alterando o valor do input E-MAIL e testando o valor guardado', () => {
  render(<App />);
  const inputEmail = screen.getByTestId('input-email');  // selecionando com o data-testid
  expect(inputEmail).toHaveValue(''); // verifica se input selecionado testá vazio
  fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } }); // // fireEvent.<tipo Evento>(elemento selecionado, obj evento)
  expect(inputEmail).toHaveValue('estudante@trybe.com');  // verifica se input selecionado tem o texto
});