const promise = new Promise((resolve, reject) => {
  let array = [];
    for (let index = 0; index < 10; index++) {
      array[index] = Math.floor(Math.random() * 50) ** 2;
    }
  const sum = array.reduce((acc, curr) => acc + curr);
  if(sum > 8000) {
    return reject()
  }
  resolve(sum);
})
.then(sum => console.log(sum))
.catch(() => console.log('rejeitado'));

