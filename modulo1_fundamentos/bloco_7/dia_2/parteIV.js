var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj));


var obj = { 0: 'a', 10: 'b', 2: 'c' };
console.log(Object.entries(obj));


var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj));

//---------------------------------------------------

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};

console.log(pairKeyValue[0][0]);