arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function reincidente(array) {
  let numeros = array;
  let repete = [];
  let objeto = {};
  let tamanho = 0;
  
  for(let indice in numeros) {
    for(let pesquisa in numeros) {
      if(numeros[indice] == numeros[pesquisa]) {
        repete.push(numeros[pesquisa]);
      }
    }
    objeto[indice] = repete;
    repete = [];
    tamanho += 1;
  }

  let maior = 0;

  
  for(indice = 1; indice < tamanho; indice += 1) {
    for(pesquisa = indice+1; pesquisa < tamanho; pesquisa += 1) {
      if(objeto[pesquisa].length >= objeto[indice].length) {
        maior = objeto[pesquisa];
        indice = pesquisa-1;
        pesquisa = tamanho;
      } 
      else if (pesquisa == tamanho) {
        maior = objeto[indice];
        indice = tamanho;
      }    
    }
  }
  return maior[0];
}
 
console.log(reincidente(arrayTeste));