function verificaPalindromo(palavra) {
  palavra = palavra.toLowerCase();
  let palindromo = '';

  for(let i = (palavra.length)-1; i >= 0; i -= 1) {
    palindromo = palindromo + palavra[i];
  }

  if(palavra == palindromo) {
    return 'true'
  } else {
    return 'false'
  }
}

console.log(verificaPalindromo('Omissíssimo'));