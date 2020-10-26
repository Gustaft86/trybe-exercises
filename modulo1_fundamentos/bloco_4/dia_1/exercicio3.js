let a = 9; 
let b = 80;
let c = 1;

if (a > b) {
  if (a > c) {
    console.log(a);
  }
  else{
    console.log(c); 
  }
}
else if (b > c) {
  console.log(b);
}
else {
  console.log(c); 
}