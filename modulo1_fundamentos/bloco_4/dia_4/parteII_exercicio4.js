arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
  let nomes = array;
  let maior;
  for(let indice = 0; indice < nomes.length; indice += 1) {
    for(let pesquisa = indice+1; pesquisa < nomes.length; pesquisa += 1) {
      if(arrayTeste[pesquisa].length > arrayTeste[indice].length) {
        maior = arrayTeste[pesquisa];
        indice = pesquisa-1;
        pesquisa = nomes.length-1;
      } 
      else if (pesquisa == nomes.length-1) {
        maior = nomes[indice];
        indice = nomes.length-1;
      }    
    }
  }
  return maior;
}

console.log(maiorNome(arrayTeste));