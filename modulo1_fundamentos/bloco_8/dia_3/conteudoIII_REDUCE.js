const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); // 85

// '1' - valor inicializado em acc/bigger = 0
// '2' - chama função getBigger()
// '3' - number = 1o posição da array
// '4' - qual maior? acc/bigger > number
// '5' - retorna valor no proprio acc/bigger
