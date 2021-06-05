const readline = require('readline-sync');

function calculaImc() {
  const peso = readline.questionFloat('Qual seu peso? (em kg) ');
  const altura = readline.questionFloat('Qual sua altura? (em metros) ');

  console.log('Peso: %s, altura: %s', peso.toFixed(2), altura.toFixed(2));

  const imc = (peso / (altura ^ 2)).toFixed(2);
  console.log('IMC: %s', imc);

  if (imc < 18.5) console.log('Situação: Abaixo do peso (magreza)');
  if (imc >= 18.5 && imc < 25) console.log('Situação: Peso normal');
  if (imc >= 25 && imc < 30) console.log('Situação: Acima do peso (sobrepeso)');
  if (imc >= 30 && imc < 35) console.log('Situação: Obesidade grau I');
  if (imc >= 35 && imc < 40) console.log('Situação: Obesidade grau II');
  if (imc > 40) console.log('Situação: Obesidade graus III e IV');

  console.log('\n');
};

calculaImc();
