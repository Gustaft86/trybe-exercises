// const uppercase = (str, callback) => {
  
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500)
// }

// it(`uppercase 'test' to equal 'TEST'`, done => {
//   uppercase('test', (str) => {
//     expect(str).toBe('TESt');
//     done();
//   });
// });

//---------------------------------------------------------------------------

// //Precisa ser assincrono para dar falso positivo!!! Utilizar o SETTIMEOUT
// const uppercase = (str, callback) => {
//   callback(str.toUpperCase());
// }

// it(`uppercase 'test' to equal 'TEST'`, () => {
//   uppercase('test', (str) => {
//     expect(str).toBe('TESt');
//   });
// });

//---------------------------------------------------------------------------

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test("teste sem expect", () => {});

it(`uppercase 'test' to equal 'TEST'`, done => {
  setTimeout(() => uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  }, 500)
)});
