"""
Exercício 3: Desafio do Palíndromo - Uma palavra é um palíndromo se a sequência
de letras que a forma é a mesma, quer seja lida da esquerda para a direita ou
vice-versa.
Crie um algorítimo que, ao receber uma sequencia de caracteres, indique se ela
é ou não um palíndromo. Para este exercício iremos considerar todas os
caracteres como minúsculos e desconsiderar espaços, pontuação e caracteres
especiais.
Use a tabela a seguir como exemplo para seus testes:

Para esse desafio a maior preocupação é na inserção dos dados, pois não devem
ser considerados caracteres especiais e espaços. Assim como tornar todos os
caracteres minúsculos (ou maiúsculos, o que importa é o padrão), pós inserção,
deve ser realizado a comparação do resultado do pop de cada extremidade.
"""

from exercicio_dia_2 import Deque


def isPalindromo(terms):
    deque = Deque()

    for character in terms:
        if character.isalpha():
            deque.push_back(character.lower())

    while len(deque) > 1:
        front_item = deque.pop_front()
        back_item = deque.pop_back()

        if front_item != back_item:
            return False
    return True
