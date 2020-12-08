const person = {
  name: "João",
  lastName: "Jr",
  age: 34
};

const { nationality } = person;

console.log(nationality);

//-----------------------------------------

const person = {
  name: "João",
  lastName: "Jr",
  age: 34
};

const { nationality = "Brazilian" } = person;
console.log(nationality); // Brazilian