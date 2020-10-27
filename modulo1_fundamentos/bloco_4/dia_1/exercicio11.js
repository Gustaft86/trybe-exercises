let salarioBruto = 1300;

let aliquotaINSS;


//INSS

if (salarioBruto < 0) {
  console.log('Salario invalido.');
}

else if (salarioBruto > 5189.82) {
  aliquotaINSS = 1;
  valorINSS = 570.88;
}

else if (salarioBruto > 2594.93) {
  aliquotaINSS = 0.11;
  valorINSS = salarioBruto * aliquotaINSS;
}

else if (salarioBruto > 1556.95) {
  aliquotaINSS = 0.09;
  valorINSS = salarioBruto * aliquotaINSS;
}

else if (salarioBruto > 0) {
  aliquotaINSS = 0.08;
  valorINSS = salarioBruto * aliquotaINSS;
}


let salarioBase = salarioBruto - valorINSS;

console.log(`Valor de alíquota do INSS é ${aliquotaINSS*100}%, resultando um valor de R$${valorINSS}`);
console.log('Salário Base é R$' + salarioBase + '.');


//IR

let deducao;
let valorIR = 0;
let aliquotaIR = 0;

if (salarioBase > 4664.68) {
  deducao = 869.36;
  aliquotaIR = 0.275;
  valorIR = (salarioBase * aliquotaIR) - deducao;
}

else if (salarioBase > 3751.06) {
  deducao = 636.13;
  aliquotaIR = 0.225;
  valorIR = (salarioBase * aliquotaIR) - deducao;

}

else if (salarioBase > 2826.66) {
  deducao = 354.80;
  aliquotaIR = 0.15;
  valorIR = (salarioBase * aliquotaIR) - deducao;
}

else if (salarioBase > 1903.99) {
  deducao = 142.80;
  aliquotaIR = 0.075;
  valorIR = (salarioBase * aliquotaIR) - deducao;
}

else {
  console.log('ISENTO');
}

let salarioLiquido = salarioBase - valorIR;

console.log(`Alíquota é de ${aliquotaIR*100}% e R$ ${deducao} a deduzir do imposto, resultando no valor de R$${valorIR}.`);
console.log(`Salário líquido é de R$${salarioLiquido}.`);