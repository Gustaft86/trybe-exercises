arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function maiorDe(array) {
  let numbers = array;
  let maior = 0;
  
  for(let fixo = 0; fixo < numbers.length; fixo += 1) {
    for(let movel = 0; movel < numbers.length; movel += 1) {
      if(numbers[fixo] > numbers[movel]) {
        maior = movel;
        fixo = movel-1;
        movel = numbers.length;
      } 
      else if (movel == numbers.length-1) {
        maior = fixo;
        fixo = numbers.length;
      }
    }
  }
  return maior;
}

console.log(maiorDe(arrayTeste));
