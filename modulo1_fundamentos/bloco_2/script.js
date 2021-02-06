let student = "euMesmo";
let studentSkills = 10;

//Eu sou Tryber e agora achei meu lugar no mundo!!!
//Vou ter muito sucesso na programação!

console.log("Sucesso!");

// -----------------------------------------------


// const objA = [index1, index2, index3, index4, index5];

// const index1 = {
//   prop1: valor1,
//   prop2: valor2,
//   prop3: valor3,
//   prop4: valor4,
//   prop5: valor5,
// };

// const index2 = {
//   prop1: valor1,
//   prop2: valor2,
// };

// const index3 = {
//   prop1: valor1,
//   prop2: valor2,
//   prop3: valor3,
// };

// const index4 = {
//   prop1: valor1,
//   prop2: valor2,
//   prop3: valor3,
//   prop4: valor4,
//   prop5: valor5,
// };

// const index5 = {
//   prop1: valor1,
// };

// const valor1 = [i1, i2, i3];
// const valor2 = [i1, i2]; 
// const valor3 = [i1, i2, i3, i4, i5]; 
// const valor4 = [i1]; 
// const valor5 = [i1, i2, i3, i4];


// const i1 = {
//   p1: v1,
//   p2: v2,
// }

// const i2 = {
//   p1: v1,
//   p2: v2,
//   p3: v3,
// }

// ----------------------------------------------

const arrA = [
  {
    name: 'nomeAleatrio',
    criticality: [
      {
        p1: 'v1',
        p2: 'v2',
      },
      {
        p1: 'v1'
      },
    ],
    prop3: [
      {
        p1: 'v1',
        p2: 'v2',
      },
      {
        p1: 'v1'
      },
      'i3',
      'i4',
      'i5'
    ],
    prop4: 'valor4',
    prop5: 'valor5',
  }, 
  {
    name: 'nomeAleatrio',
    criticality: [
      {
        p1: 'v1',
        p2: 'v2',
      },
      {
        p1: 'v1'
      },
      'i3'
    ],
  }, 
  {
    name: 'nomeAleatrio',
    criticality: [
      {
        p1: 'v1',
        p2: 'v2',
      }
    ],
    prop3: [
      {
        p1: 'v1',
        p2: 'v2',
      },
      {
        p1: 'v1'
      },
      'i3',
      'i4',
      'i5'
    ],
  }
];

let newArr = [];
const resultadoMap = arrA.forEach((arr) => (arr.criticality).forEach((result) => {
  newArr.push(result.p1);
}));
console.log('resultadoMap', resultadoMap);
console.log(newArr);
// const teste = resultadoMap.map((result) => result);
// console.log('teste', teste);
