class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def difference(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                return False

        return True

    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    # uma lista do tamanho necessário
    # instancie um objeto do tipo Conjunto e adicione os valores
    # conj = Conjunto()

    # for item in [0, 10, 100, 1000]:
    #     conj.add(item)
    # print(conj)
    # -------------------------------------
    # Para que o comando print funcione, precisamos que a nossa classe tenha
    # um método chamado __str__
    # conj = Conjunto()
    # for i in [0, 10, 100, 1000]:
    #     conj.add(i)
    # print(conj)

    # conj2 = Conjunto()
    # for i in [1, 2, 3]:
    #     conj2.add(i)
    # print(conj2)

    # conj3 = Conjunto()
    # for i in [7, 2, 10]:
    #     conj3.add(i)
    # print(conj3)
    # -------------------------------------
    # metodo retorna se um elemento faz parte ou não do conjunto usando o
    # operador in
    # conj = Conjunto()
    # for i in [1, 2, 3]:
    #     conj.add(i)
    # print(conj)
    # print(1 in conj)
    # print(0 in conj)
    # -------------------------------------
    # Imprima na tela a união dos dois conjuntos.
    # conj1 = Conjunto()
    # for i in range(1, 11):
    #     conj1.add(i)

    # conj2 = Conjunto()
    # for i in range(10, 21):
    #     conj2.add(i)

    # conj3 = conj1.union(conj2)
    # print(conj3)

    # conj4 = Conjunto()
    # print(conj4)
    # -------------------------------------
    # conj1 = Conjunto()
    # for i in [1, 2, 3, 4, 7, 9, 10, 12, 15]:
    #     conj1.add(i)

    # conj2 = Conjunto()
    # for i in [2, 4, 5, 6, 7, 8, 11, 10, 15]:
    #     conj2.add(i)

    # conj3 = conj1.intersection(conj2)
    # print(conj3)
    # -------------------------------------
    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = Conjunto()
    conj4 = conj1.union(conj2)

    print(conj1.issubset(conj4))
    print(conj4.issuperset(conj1))
    print(conj3.issubset(conj4))
