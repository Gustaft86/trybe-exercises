def selection_sort(array):
    # como um algoritmo de força bruta
    # percorre a estrutura exaustivamente
    for i in range(len(array)):
        minimum = i

        # itera sobre os elementos não ordenados
        for j in range(i + 1, len(array)):
            # seleciona o menor valor
            if array[j] < array[minimum]:
                minimum = j

        # após encontrar o menor valor
        # ao invés de criar um novo array (o que aumenta complexidade espaço)
        # realizamos a substituição entre o menor elemento
        # e a posição i que corresponde ao primeiro elemento não ordenado
        # que consequentemente passará a ser o último ordenado
        array[minimum], array[i] = array[i], array[minimum]

    return array


print(selection_sort([100, 4, 6, 33, 56, 67]))

# Analisando a complexidade deste algoritmo, vemos que independente de todos os
# elementos estarem ordenados (ou não), ou parcialmente ordenados, sempre
# teremos que percorrer o array completamente e também n - 1 elementos a cada
# iteração. Isto nos leva a uma complexidade O(n²) para todos os casos (pior,
# médio, melhor).
# Como criamos apenas algumas variáveis de controle e não criamos um array
# auxiliar, nosso algoritmo tem uma complexidade de espaço constante, ou seja,
# não muda seja para 10, 1000 ou 10.000 elementos.
