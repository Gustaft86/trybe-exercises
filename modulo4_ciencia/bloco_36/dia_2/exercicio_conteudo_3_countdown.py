def countdown(n):  # nome da função e parâmetro
    if n == 0:  # condição de parada
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # chamada de si mesma com um novo valor


countdown(5)


# def iterative_countdown(n):
#     while n > 0:
#         print(n)
#         n = n - 1
#     print("FIM!")

#     return n


# iterative_countdown(5)
