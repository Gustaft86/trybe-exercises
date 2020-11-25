const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const tamanho = (obj) => {
  console.log(Object.keys(obj).length);
}

tamanho(lesson1);
tamanho(lesson2);
tamanho(lesson3);

/* Crie uma função para mostrar o tamanho de um objeto. */