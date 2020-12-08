const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};
console.log(sum(4, 7, 8, 9, 60, 55, 34, 7, 9, 32, 2)); // 88

//-------------------------------------------------------

const sum = (array) => {
  return array.reduce((accumulator, current) => accumulator + current, 0);
};
console.log(sum([4, 7, 8, 9, 60, 55, 34, 7, 9, 32, 2])); // 88