const fetch = require('node-fetch');

// async function verifiedFetch(url) {
//   if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//     return fetch(url)
//       .then((r) => r.json())
//       .then((r) => (r.value));
//   
//   throw new Error('endpoint não existe');
// }

async function sendJokeToFriend(name) {
  const message = await fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((r) => r.json())
    .then((r) => (r.value))
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    //.catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")