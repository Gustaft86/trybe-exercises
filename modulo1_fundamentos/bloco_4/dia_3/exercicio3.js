let valorN = 5;
let muro = valorN ;


for(let linha = 0; linha < valorN; linha += 1) {
  let sequencia = '';
  muro -= 1;

  for(let i = 0; i < muro; i += 1) {
    sequencia += ' ';
  }

  for(let y = valorN; y > muro; y -= 1) {
    sequencia += '*';
  }

  console.log(sequencia);

}

