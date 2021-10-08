# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(mean([4, 8, 6]))
print(mean({4, 8, 6}))
# print(mean({'um': 4, 'dois': 8, 'tres': 6}))

help("len")  # quantidade de elementos da array
print(len([5, 1, 6]))  # 3
