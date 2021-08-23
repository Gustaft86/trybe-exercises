# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def biggerThan(num1, num2):
    if num1 > num2:
        return num1
    else:   # else não é necessario
        return num2


print(biggerThan(10, 5))
