let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let i;

for (i = 0; i <= numbers.length-1; i += 1) {
  if (i < numbers.length-1) {
    newNumbers.push(numbers[i]*numbers[i+1]);
  } else {
    newNumbers.push(numbers[i]*2);
  }
}

console.log(newNumbers);
