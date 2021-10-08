# Exercício 3: Faça um algoritmo qualquer com três loops aninhados um dentro
# do outro. Entenda como ele terá uma complexidade de O(n³) !
# Se tiver dificuldades, nos procure!


def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


# Usar 1000 aqui vai ser muito lento!
meu_array = list(range(1, 100))
multiply_arrays(meu_array, meu_array, meu_array)
