def merge_sort(array):
    # caso base: se já atingiu a menor porção (1)
    if len(array) <= 1:
        # retorne o array
        return array
    # calculo do pivot: índice que indica onde o array será particionado
    # no caso, metade
    mid = len(array) // 2
    # para cada metade do array
    # chama a função merge_sort de forma recursiva
    left, right = merge_sort(array[:mid]), merge_sort(array[mid:])
    # mistura as partes que foram divididas
    return merge(left, right, array.copy())


# função auxiliar que realiza a mistura dos dois arrays
def merge(left, right, merged):

    left_cursor, right_cursor = 0, 0

    # enquanto nenhumas das partes é percorrida por completo
    while left_cursor < len(left) and right_cursor < len(right):

        # compare os dois itens das partes e insira no array de mistura o menor
        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            print(left_cursor + right_cursor, merged)
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            print(left_cursor + right_cursor, merged)
            right_cursor += 1
    # a iteração acima irá inserir os elementos de forma ordenada

    # quando uma das partes termina, devemos garantir
    # que a outra sera totalmente inserida no array de mistura

    # itera sobre os elementos restantes na partição "esquerda"
    # inserindo-os no array de mistura
    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    # itera sobre os elementos restantes na partição "direita"
    # inserindo-os no array de mistura
    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged


print(merge_sort([100, 4, 6, 33, 56, 67]))


# A separação em partes traz uma complexidade O(log n) , e as misturas O(n).
# Com isso, temos uma complexidade de O(n log n), independente do array estar
# ordenado por completo, não ordenado, ou parcialmente ordenado.
# Como é um algoritmo recursivo, consome mais memória, possuindo uma
# complexidade de espaço O(n), ou seja, cresce linearmente proporcional a
# entrada de dados.


# # Vamos supor os números não ordenados
# - coleção = 7 5 1 2 8 4 6 3
# first_string = "pedra"
# secund_string = "perda"

# # Separamos nosso array em porções menores
# - 7 5 1 2         8 4 6 3

# # continuamos fazendo isto
# # até a menor porção possível (1)
# - 7 5    1 2    8 4    6 3

# # Até a menor porção possível (1)
# - 7    5    1    2    8    4    6    3

# # Feito o processo de divisão, vamos ao processo de conquista.
# # Vamos reagrupando as divisões mas de forma ordenada
# - 5 7    1    2    8    4    6    3

# - 5 7    1 2    8    4    6    3

# - 5 7     1 2    4 8    6    3

# - 5 7     1 2    4 8    3 6

# # Continuamos o reagrupamento
# - 1 2 5 7    4 8    3 6

# - 1 2 5 7    3 4 6 8

# # Por fim misturamos todos os elementos
# - 1 2 3 4 5 6 7 8
