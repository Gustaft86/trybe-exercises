let pecaXadrex = 'REI';
let minuscula = pecaXadrex.toLowerCase();

switch (minuscula) {
  case 'peão':
    console.log('Move-se uma casa para frente.');
    break;
  case 'bispo':
    console.log('Move-se para qualquer casa na diagonal.');
    break;
  case 'cavalo':
    console.log('Move-se em forma de L.');
    break;
  case 'torre':
    console.log('Move-se para qualquer casa na diagonal ou vertical.');
    break;
  case 'rainha':
    console.log('Move-se para qualquer casa, em qualquer posição.');
    break;
  case 'rei':
    console.log('Move-se uma casa para qualquer direção.');
    break;
  default:
    console.log("Peça passada é inválida."); 
}