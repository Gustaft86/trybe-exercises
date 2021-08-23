# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

# def minimum(numbers):
#     smaller = numbers[0]
#     for number in numbers:
#         if number < smaller:
#             smaller = number
#     return smaller


# print(minimum(numbers))


# 🦜 Dica: a função min já existe nativamente no Python!
# Trabalhando em Python, sempre compensa pesquisar uma solução
# primeiro porque este brinquedo vem com todos os acessórios inclusos!


def minimum(numbers):
    return min(numbers)


print(minimum(numbers))

# ou mesmo
# minimum = min
