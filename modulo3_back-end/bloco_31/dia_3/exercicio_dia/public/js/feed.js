// Faça com que quando o cliente clicar no elemento com o id likeIcon ,
// seja emitido um evento likePost para o servidor.

const socket = window.io();

document.querySelector('#likeIcon').addEventListener('click', () => {
  socket.emit('likePost');
});


socket.on('updateLikes', (countLikes) => {
  document.querySelector('#currentLikes').innerHTML = countLikes;
});

// Exercício 5
// Faça com que o ícone com id starIcon emita um evento starPost e atualize a quantidade diretamente pelo front-end para o cliente atual.
document.querySelector('#starIcon').addEventListener('click', () => {
  const currentStarsElement = document.querySelector('#currentStars');
  let currentStars = parseInt(currentStarsElement.innerHTML);
  
  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost');
});

// Exercício 7
// Implemente um listener para o evento updateStars para atualizar a quantidade atual de estrelas.
socket.on('updateStars', (countStars) => {
  document.querySelector('#currentStars').innerHTML = countStars;
});