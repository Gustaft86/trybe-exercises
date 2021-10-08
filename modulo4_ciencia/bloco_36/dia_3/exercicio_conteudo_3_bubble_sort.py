def bubble_sort(array):
    # variável utilizado na iteração
    # para marcar se houve ou não trocas naquela iteração
    # Quando falsa, indica que o array está ordenado
    has_swapped = True

    # armazena o número de iterações para evitar
    # a iteração sobre índices já ordenados
    num_of_iterations = 0

    # Enquanto ainda não está ordenado (ocorreram trocas na iteração)
    while has_swapped:
        has_swapped = False

        # percorra o array até o ultimo índice não ordenado
        for i in range(len(array) - num_of_iterations - 1):
            # caso a posição corrente seja maior que a posterior
            if array[i] > array[i + 1]:
                # realiza a troca entre as posições
                array[i], array[i + 1] = array[i + 1], array[i]
                # marca que tivemos trocas nesta iteração
                has_swapped = True
        num_of_iterations += 1

    return array


print(bubble_sort([100, 4, 6, 33, 56, 67]))


# # Vamos supor os números não ordenados
# - coleção = 7 5 1 2

# # vamos realizar a primeira iteração.
# # Comparamos os dois primeiros elementos (índices 0 e 1)
# - 7 > 5 ?

# # como o 7 é maior 5, faremos a troca de posição

#            ⤺
# - coleção = 5 7 1 2
#            ⤻
# # Agora comparamos os elementos dos índices 1 e 2

# - 7 > 1?

# # Novamente faremos a troca
#              ⤺
# - coleção = 5 1 7 2
#              ⤻

# # Depois, comparamos os índices 2 e 3

# - 7 > 2

# # Mais uma vez faremos a troca
#                ⤺
# - coleção = 5 1 2 7
#                ⤻

# # Como houveram trocas, vamos iterar mais uma vez nossa coleção
# # O elemento 7, como uma bolha, foi subindo até sua posição
# - coleção = 5 1 2 7

# # Comparamos os primeiros elementos e faremos a troca
#            ⤺
# - coleção = 1 5 2 7
#            ⤻

# # Em seguida comparamos os próximos elementos e faremos a troca novamente

#              ⤺
# - coleção = 1 2 5 7
#              ⤻
# # Como houveram trocas precisamos iterar novamente a nossa coleção
# - coleção = 1 2 5 7

# # Porém desta vez não há trocas e nossa coleção está ordenada
