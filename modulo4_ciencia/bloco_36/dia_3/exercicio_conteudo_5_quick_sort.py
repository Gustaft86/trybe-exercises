def quicksort(array, low, high):
    # caso base: se já atingiu a menor porção (1)
    if len(array) == 1:
        # retorne o array
        return array

    # os índices irão se cruzar quando o array estiver ordenado
    if low < high:
        # índice da partição é o índice onde o array foi divido
        # e é determinado a partir do pivô.
        # Este índice já está ordenado
        partition_index = partition(array, low, high)

        # Ordena os elementos presentes antes da partição (menores que o pivô)
        # e depois (maiores que o pivô)
        quicksort(array, low, partition_index - 1)
        quicksort(array, partition_index + 1, high)


# função auxiliar responsável pela partição do array
# escolhendo um pivô e fazendo movimentações dos sub arrays gerados
def partition(array, low, high):
    # índice do menor elemento
    i = low - 1
    # o pivô será escolhido
    # através do índice que divide o array
    pivot = array[high]  # pivot

    # itera sobre os elementos
    for j in range(low, high):

        # se o elemento corrente é menor ou igual ao pivô
        if array[j] <= pivot:

            # incrementa o índice do menor elemento
            i = i + 1
            array[i], array[j] = array[j], array[i]
    array[i + 1], array[high] = array[high], array[i + 1]

    return i + 1


array = [100, 4, 6, 33, 56, 67]
quicksort(array, 0, len(array) - 1)
print(array)

# # Vamos supor os números não ordenados
# - coleção = 7 1 2 5 4 6 3

# # Faremos a escolha do elemento pivô.
# # Este elemento será o responsável por particionar (dividir) a lista.
# # Posso escolher qualquer elemento neste passo e, por isso,
# # vou escolher o elemento do meio
# - pivot = 5

# # Movemos todos os elementos menores para a esquerda e os maiores para a
# direita (a)
# - 1 2 4 3    5    7 6

# # Precisamos ordenar as coleções geradas,
# # começando com a lista de elementos inferiores
# - 1 2 4 3

# # Novamente escolhemos o pivot
# - pivot = 2

# # Novamente fazemos a divisão (b)
# - 1    2    4 3

# # A lista à esquerda já não tem como ser particionada,
# # porém a da direita ainda pode ser particionada (c)
# - 4 3

# # Escolhendo o pivô e movendo os outros elementos
# # chegaremos a
# - 3    4

# # Agora precisamos o processo de conquista,
# # voltando recursivamente ao passo (c), que pediu para ordenar
# # a sub coleção 4 3, temos como resposta
# - 3 4
# # essa resposta, nos faz retornar ao passo (b), onde concatenaremos ao pivô
# a ordenação do lado direito e esquerdo,# # resultando em
# - 1 2 3 4

# # Vamos agora ver o outro lado do passo (a)
# - 7 6

# # realizando o mesmo processo
# # após escolher o pivô e realizar os movimentos teremos
# - 6    7

# # Por fim a resposta é utilizada lá no passo (a) para concatenarmos os dois
# lados e termos por fim a lista ordenada
# - 1 2 3 4 5 6 7
