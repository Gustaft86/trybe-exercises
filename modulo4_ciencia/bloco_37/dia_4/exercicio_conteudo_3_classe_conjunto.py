"""
Exercício 3: is_in
Caso queiramos saber se um elemento faz parte ou não do conjunto usando o
operador in precisamos que a nossa classe tenha um método chamado __contains__
e é o que faremos agora:
Crie um método com a assinatura abaixo:

def __contains__(self, item):
    # retorno: True, caso o elemento faça parte. False, caso o elemento não
    # faça parte.

Exemplos de entrada e saída:

A = {1, 2, 3}

# entrada: 1
# saída: True

# entrada: 0
# saída: False
"""


class Conjunto:
    # ...

    def __contains__(self, item):
        return self.set[item]


if __name__ == "__main__":
    # ...

    conj = Conjunto()
    for i in [1, 2, 3]:
        conj.add(i)
    print(conj)
    print(1 in conj)
    print(0 in conj)

    # ...
