# Exercício 2: ReverseCorp Ligue seu cronômetro de novo, e tente desenvolver
# esta solução, utilizando a iteração. (Se demorar mais que 10 minutos, pare,
# e prossiga com o conteúdo!)

# def reverse(list):
#     reversed_list = []
#     for item in list:
#         reversed_list.insert(0, item)
#     return reversed_list


def reverse(list):
    if len(list) < 2:
        return list
    else:
        print(list[1:], [list[0]])
        teste = reverse(list[1:]) + [list[0]]
        print(teste)
        return teste


print(reverse([0, 1, 2, 3]))

# Nome da função e parâmetro:
#     Condição de parada

#     Chamada de si mesma
