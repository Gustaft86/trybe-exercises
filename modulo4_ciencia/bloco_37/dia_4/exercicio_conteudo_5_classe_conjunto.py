"""
Exercício 5: Intersecção
Intersecção: Todos os elementos que estão em A E em B
Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto
da classe Conjunto :

def intersection(self, conjuntoB):
    # retorno: outro objeto Conjunto com intersecção do próprio objeto com o
    # conjuntoB

Exemplos de entrada e saída:

A = {1, 2, 3}
B = {3, 4, 5}
# saída: {3}

C = {0, 3, 6, 9}
B = {12, 15, 18}
# saída: {}
"""


class Conjunto:
    # ...

    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    # ...

    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = conj1.intersection(conj2)
    print(conj3)

    # ...
