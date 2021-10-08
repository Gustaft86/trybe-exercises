# Exercício 1: Qual a Ordem de Complexidade (complexidade de tempo) do
# algoritmo abaixo? E a complexidade de espaço?


def multiply_array(numbers):
    result = 0
    for number in numbers:
        result *= number

    return result


# O algoritmo faz uma iteração para cada elemento do array de entrada,
# o numbers , então, tendo n como o tamanho da entrada o algoritmo tem uma
# Complexidade de Tempo O(n) . O que ele faz a cada iteração, no entanto, é
# alterar o valor de uma variável, a result . Sendo assim, tenha a entrada um
# ou cem mil elementos, o espaço em memória ocupado será o mesmo. Assim sendo,
# a Complexidade de Espaço do algoritmo é O(1)
