# Exercício 1: Fibonacci: Ligue o cronômetro, e faça a medição de quanto tempo
# você leva para resolver este problema. Se demorar mais de 10 minutos, pare!
# Seu tempo acabou.


# def fibonacci(n):
#     sequence = [0, 1]
#     for x in range(n):
#         next = sequence[-1] + sequence[-2]
#         sequence.append(next)
#     return sequence[-1]


def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(5))
