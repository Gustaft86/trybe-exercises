# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com 5 asteriscos de base. Por exemplo:


def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * '*')


draw_triangle(15)
