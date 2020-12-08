const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 }
    ]
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' }
    ]
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' }
    ]
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' }
    ]
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' }
    ]
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' }
    ]
  },
];

/* const allNameStudents = [];

for(let i = 0; i < estudantes.length; i += 1 ){
  if(estudantes[i].turno === 'Manhã'){
    allNameStudents.push(`${estudantes[i].nome} ${estudantes[i].sobrenome}`)
  }
}

console.log(allNameStudents) */


/* const allNameStudents = estudantes.filter((estudante) => (
  estudante.turno === 'Manhã')
).map((estudante)=>`${estudante.nome} ${estudante.sobrenome}`);

console.log(allNameStudents); */


/* const allNameStudents = estudantes.filter((estudante) => (
  estudante.turno === 'Manhã')
)

console.log(allNameStudents);

const teste = allNameStudents.map((estudante)=>`${estudante.nome} ${estudante.sobrenome}`);

console.log(teste);
 */

//----------------------------------------------------------

/*
const reportStatus = (name, students) => {
  let getStudent;
  for (let i = 0; i < students.length; i += 1 ) {
    if (students[i].nome === name) {
      getStudent = students[i];
      break;
    }
  }

  let report = [];
  for (let i = 0; i < getStudent.materias.length; i += 1) {
    if (getStudent.materias[i].nota >= 60) {
      report.push(`${getStudent.materias[i].name} Aprovado`)
    } else {
      report.push(`${getStudent.materias[i].name} Reprovado`)
    }
  }
  return report;
}

console.log(reportStatus('Natalia', estudantes))
*/


const reportStatus = (name, students) => {
  const student = students.find((student) => student.nome === name);
  return student.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Natalia', estudantes));


//----------------------------------------------------------