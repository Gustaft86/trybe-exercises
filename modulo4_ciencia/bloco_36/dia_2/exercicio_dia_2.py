# Exercício 2: Transforme o algoritmo criado acima em recursivo.

# Exercício anterior: Crie um algoritmo não recursivo para contar quantos
# números pares existem em uma sequência numérica (1 a n).


def conta_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares(n-1)
    else:
        return conta_pares(n-1)


print(conta_pares(12))
