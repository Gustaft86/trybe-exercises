// function doMath(a, b, c) {
//   return new Promise((resolve, reject) => {
//     /* Criamos um array com os tipos dos parâmetros */
//     const paramTypes = [a, b, c].map((param) => typeof param);

//     /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
//     if (paramTypes.some((paramType) => paramType !== 'number')) {
//       return reject(new Error('Informe apenas números'));
//     }
//     const result = (a + b) * c;

//     if (result < 50) {
//       return reject(new Error('Valor muito baixo'));
//     }
//     resolve(result);
//   });
// }

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100 + 1);
// }

// function callDoMath() {
//   /* Criamos um novo array de 3 posições
//    * e utilizamos o `map` para gerar um número aleatório
//    * para cada posição do Array
//    */
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

//   doMath(...randomNumbers)
//   .then(result => console.log(result))
//   .catch(err => console.error(err.message))
// }

// callDoMath();


function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    /* Criamos um array com os tipos dos parâmetros */
    const paramTypes = [a, b, c].map((param) => typeof param);

    /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
    if (paramTypes.some((paramType) => paramType !== 'number')) {
      return reject(new Error('Informe apenas números'));
    }
    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }
    resolve(result);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  try {
    const result = await doMath(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

callDoMath();
