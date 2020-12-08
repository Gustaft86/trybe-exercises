const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

//console.log(people.filter(({nationality, bornIn}) => nationality === "Australian" && bornIn >= 1901 && bornIn < 2000));

// escreva filterPeople abaixo
const filterPeople = (() => {
  return people.filter(({nationality, bornIn}) => nationality === "Australian" && bornIn >= 1901 && bornIn < 2000)
});

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" });
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" });