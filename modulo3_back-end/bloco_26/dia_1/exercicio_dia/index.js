const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
  { name: 'Calcular fatorial', script: './fatorial.js' },
  { name: 'Exibir n números de fibonacci', script: './fibonacci.js' },
];

console.log(scripts);

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => {
    const opcao = `${index + 1} - ${script.name} `
    return opcao;
});
// altera a array, porem retorna o lenght da array **CUIDADO**
mensagem.unshift('Escolha um número para executar o script correspondente');
  
const scriptNumber = readline.questionInt(`${mensagem.join('\n')}\n`) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);
