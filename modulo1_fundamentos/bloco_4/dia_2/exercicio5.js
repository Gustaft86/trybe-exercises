let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
let posicao =0;

for(let fixo = 0; fixo < numbers.length; fixo += 1) {
  for(let movel = 0; movel < numbers.length; movel += 1) {
    if(numbers[fixo] < numbers[movel]) {
      maior = numbers[movel];
      posicao = movel;
      fixo = movel-1;
      movel = numbers.length;
    } 
    else if (movel == numbers.length-1) {
      maior = numbers[fixo];
      fixo = numbers.length;
    }
  }
}

console.log(`O maior número da array é ${maior}, na posição ${posicao}.`);
