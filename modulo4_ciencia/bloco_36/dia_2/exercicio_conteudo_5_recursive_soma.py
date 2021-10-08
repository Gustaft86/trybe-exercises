# Exercício 3: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber
# um número de parâmetro e deve somar todos os números antecessores a ele.
# Exemplo:

# Número passado por parâmetro à função: 4

# Execução: 4 + 3 + 2 + 1

# Resultado: 10

def sum_recursive(n):
    if n == 0:
        return 0
    else:
        return n + sum_recursive(n - 1)


print(sum_recursive(4))


# Podemos observar que a condição de parada é se n for igual a 0, caso
# contrário a operação continuará sendo feita.
