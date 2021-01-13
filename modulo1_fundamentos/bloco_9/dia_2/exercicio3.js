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
.then(sum => {
  const divisors = [2, 3, 5, 10];
  console.log(sum);
  return divisors.map(divisor => Math.floor(sum / divisor))
})
.then(dividend => dividend.reduce((number, acc) => number + acc, 0))
.then(summation => console.log(summation))
.catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));

