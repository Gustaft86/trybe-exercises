const net = require('net');
/* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos clientes aos servidores */
const client = net.connect({ port: 2708 }, () => {
  console.log('Cliente conectado ao servidor!');
  client.write('Olá');
});

/* Assim como no servidor, também temos eventos do lado do cliente, onde o evento 'data' é ativado quando o servidor envia uma mensagem para o cliente. */
client.on('data', (data) => {
  console.log(data.toString());
  // client.end();
});

/* Quando a conexão é interrompida/terminada, é ativado o evento 'end', onde podemos limpar alguns caches, dar uma mensagem para usuário, atualizar algum dado no banco de dados etc. */
client.on('end', () => {
  console.log('Desconectado do servidor');
});


// ?????

// Exercício 3
// Envie uma mensagem do cliente para o servidor.
// Essa já não é tão fácil assim, né? Pois bem, assim como o servidor pode enviar mensagens para os clientes dentro de uma conexão, um cliente também pode:
// client.js
// Copiar
// const client = net.connect({ port: 8080 }, () => {
//   console.log('Cliente conectado ao servidor!');
//   client.write('Cliente número 1');
// });
// E assim como um cliente pode receber mensagens do servidor, o servidor também pode receber dados do cliente.
// server.js
// Copiar
// const server = net.createServer((connection) => {
//   connections.push(connections);
//   connection.on('end', () => {
//     console.log('Cliente desconectado');
//   });

//   connection.on('data', (data) => {
//     console.log(`O cliente disse: ${data}`);
//   });
// });