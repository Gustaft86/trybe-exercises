// Desafio 10
function techListe(arrayTec, name) {
  if (arrayTec.length === 0) {
    return 'Vazio!';
  }
  return arrayTec
    .sort()
    .map((element) => ({tech: element, name}));
}

console.log(techList(["Javascript", "CSS", "React", "Jest"], "Gustavo"))

module.exports = techList;
