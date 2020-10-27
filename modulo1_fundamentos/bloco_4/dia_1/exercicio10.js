let custo = 100;
let valorVenda = 200;
let imposto = custo * 0.2;

if (custo < 0 || valorVenda < 0) {
  console.log('Valores de entrada invalidos');
}
else {
  let lucro = valorVenda - (custo + imposto);
  console.log(lucro * 1000);
}