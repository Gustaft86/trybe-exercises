const readline = require('readline-sync');

function calculaVelocidade() {
  const distancia = readline.questionInt('Distância percorrida (m) ');
  const tempo = readline.questionInt('Tempo gasto (s) ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}

calculaVelocidade();
