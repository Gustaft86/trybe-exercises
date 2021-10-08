def insertion_sort(array):
    # itera sobre cada valor do array
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        # enquanto o valor da posição for menor que os elementos a sua esquerda
        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            # move as posições para a direita
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
        # colocamos o elemento em sua nova posição
        array[current_position] = current_value
    return array


print(insertion_sort([100, 4, 6, 33, 56, 67]))


# Como precisamos percorrer cada um dos elementos, e depois percorrer
# comparando os elementos à esquerda do mesmo, em um pior caso, onde o array
# esteja inversamente ordenado, teremos uma complexidade de O(n²). Isto se
# repete também em média, para arrays parcialmente ordenados. Porém se
# inicialmente o array estiver ordenado, este algoritmo terá complexidade O(n),
# pois só fara a iteração de todos os elementos, e não precisará ficar movendo
# os elementos.
# Assim como na ordenação por seleção, como criamos apenas algumas variáveis de
# controle e não criamos um array auxiliar, nosso algoritmo tem uma
# complexidade de espaço constante, ou seja, não muda, seja para 10, 1000 ou
# 10.000 elementos.
