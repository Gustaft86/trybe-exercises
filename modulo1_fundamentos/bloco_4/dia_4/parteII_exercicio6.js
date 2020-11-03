let numero = 5;

function somatorio(numLimite) {
  let soma = 0;
  for(let indice = 1; indice <= numLimite; indice += 1) {
    soma += indice;
  }
  return soma;
}

console.log(somatorio(numero));