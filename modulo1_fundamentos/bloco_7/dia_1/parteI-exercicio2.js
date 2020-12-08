/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

for (let i = 1; i < oddsAndEvens.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (oddsAndEvens[i] < oddsAndEvens[j]) {
      let position = oddsAndEvens[i];

      oddsAndEvens[i] = oddsAndEvens[j];
      oddsAndEvens[j] = position;
    }
  }
}
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
 */

 //------------------------------------------------------------------------------------

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
 

 //------------------------------------------------------------------------------------

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function (a, b) {
  return (a - b);
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
 */

 //------------------------------------------------------------------------------------

/*  const oddsAndEvens = [13, 3, 4, 10, 7, 2, 1];

oddsAndEvens.sort();

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
 */

 //------------------------------------------------------------------------------------

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

