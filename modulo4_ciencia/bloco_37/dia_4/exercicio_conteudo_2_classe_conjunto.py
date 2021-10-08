"""
Exercício 2: Imprimir
Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto)
não irá funcionar. O que será impresso é o endereço de memória onde o objeto
está guardado, e não é isso que queremos. Para que o comando print funcione,
precisamos que a nossa classe tenha um método chamado __str__ e é o que faremos
agora:
Crie um método com a assinatura abaixo:

def __str__(self):
    # retorno: uma string que representa o seu objeto


Exemplos de entrada e saída:

A = {1, 2, 3}
# saída: '{1, 2, 3}'

B = {7, 2, 10}
# saída: '{2, 7, 10}'

C = {}
# saída: '{}'

A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem
em consideração. A saída pode ser em qualquer ordem, mas provavelmente será
mais fácil retornar em ordem. Teste seu método imprimindo os objetos que você
criou.
"""


class Conjunto:
    # ...

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string


if __name__ == "__main__":
    conj = Conjunto()
    for i in [0, 10, 100, 1000]:
        conj.add(i)
    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)
