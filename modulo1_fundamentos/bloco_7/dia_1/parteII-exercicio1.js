function fatorial(n) { 
  if(n === 0 || n === 1) {
    return 1;
  } else {
    return (n * fatorial(n-1));
  }
}

console.log(fatorial(3));

//------------------------------------------------------------------------------------

const fatorial = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n-1); //operador ternário

console.log(fatorial(5));