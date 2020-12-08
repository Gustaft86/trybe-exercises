const longestWord = 'Antônio foi no banheiro maravilhoso e não sabemos o que aconteceu' // retorna 'aconteceu'

let longest = ''; 

longestWord.split(' ').forEach(word => {
  if (word.length > longest.length) {
    longest = word;
  }
});

console.log(`A maior palavra da string é ${longest}.`);
 
