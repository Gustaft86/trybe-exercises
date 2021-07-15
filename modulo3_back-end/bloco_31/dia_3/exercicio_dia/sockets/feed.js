// Exercício 2
// Do lado do servidor faça um listener para capturar o evento likePost que vai incrementar a quantidade atual de likes do post.

module.exports = (io) => io.on('connection', (socket) => {
  let currentLikes = 0;
  let currentStars = 0;

  socket.on('like', () => {
    currentLikes += 1;

    // Exercício 3
    // Emita um evento updateLikes apenas para o cliente que enviou o like enviando a quantidade atual de likes.
    socket.emit('updateLikes', currentLikes);

    // Exercício 4
    // // Modifique o código feito no exercício anterior para com que o evento updateLikes seja enviado para todos os clientes conectados.
    // io.emit('updateLikes', currentLikes);
  });

  // Exercício 6
  // No servidor implemente um listener para o evento starPost e emita um evento updateStars com a quantidade para todos os clientes exceto o cliente que enviou o evento.
  socket.on('starPost', () => {
    currentStars += 1;

    socket.broadcast.emit('updateStars', currentStars);
  })
});
