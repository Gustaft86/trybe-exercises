const fs = require('fs').promises;

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpson) {
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
     * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
     * tendo como motivo o que passarmos para o `throw`.
     * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
     */
    throw new Error('id não encontrado');
  }

    /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
    * `return` aciona o fluxo de sucesso e resolve a Promise.
    * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
    * dentro do executor de uma Promise.
    */
  return chosenSimpson;
}
