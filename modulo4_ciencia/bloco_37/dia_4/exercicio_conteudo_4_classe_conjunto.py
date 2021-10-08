"""
Exercício 4: União
União: Todos os elementos que estão em A OU em B
Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto
da classe Conjunto :

def union(self, conjuntoB):
    # retorno: outro objeto Conjunto com união do próprio objeto com o
    # conjuntoB

Na main , instancie dois objetos do tipo Conjunto . Preencha o primeiro com os
valores de 1 a 10 , e o segundo, com valores de 10 a 20 ;
Imprima na tela a união dos dois conjuntos.
"""


class Conjunto:
    # ...

    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    # ...

    conj1 = Conjunto()
    for i in range(1, 11):
        conj1.add(i)

    conj2 = Conjunto()
    for i in range(10, 21):
        conj2.add(i)

    conj3 = conj1.union(conj2)
    print(conj3)
