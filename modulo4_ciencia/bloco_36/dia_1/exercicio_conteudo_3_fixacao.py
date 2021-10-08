# Exercício 2: Para desembaraçar a sopa de letrinhas que a seção anterior
# criou, meça o tempo de execução do algoritmo acima e, mudando o tamanho das
# entradas, veja como, se você aumenta a entrada em n vezes, o tempo de
# execução aumenta em n² vezes!


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


meu_array = list(range(1, 1000))

multiply_arrays(meu_array, meu_array)
