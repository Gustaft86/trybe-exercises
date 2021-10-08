class Deque:
    FIRST_ELEMENT = 0

    def __init__(self):
        self._data = []

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(str(x) for x in self._data) + ")"

    """
    push_front: utilizaremos a propriedade para indicar que todas as inserções
    desse tipo serão adicionadas na posição 0 da estrutura

    push_back: utilizaremos a função append, da lista interna, para que todas
    as inserções desse tipo sejam adicionadas na posição n - 1 da estrutura.
    """

    def push_front(self, value):
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        self._data.append(value)

    """
    pop_front: utilizaremos a função pop , da lista interna, com índice para
    remover o elemento existente na posição 0

    pop_back: utilizaremos a função pop , da lista interna, no entanto sem o
    índice, fazendo com que o elemento da posição n - 1 seja removido.
    """

    def pop_front(self):
        if self._data:
            return self._data.pop(self.FIRST_ELEMENT)
        return None

    def pop_back(self):
        if self._data:
            return self._data.pop()
        return None

    """
    os métodos peek_front e peek_back que nos permitem apenas visualizar o
    conteúdo existente nas extremidades, não alterando o conteúdo.
    """

    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    def peek_back(self):
        if self._data:
            return self._data[len(self) - 1]
        return None


if __name__ == "__main__":
    deque = Deque()
    elements_1 = [6, 7, 8, 9, 10]
    elements_2 = [1, 2, 3, 4, 5]

    for elem in elements_1:
        deque.push_front(elem)

    for elem in elements_2:
        deque.push_back(elem)

    print(deque)  # saída: Deque(10, 9, 8, 7, 6, 1, 2, 3, 4, 5)
    print(deque.__len__())  # saída: 10

    print(deque.pop_front())  # saída: 10, pois ele retorna o número retirado
    print(deque.pop_back())  # saída: 5, pois ele retorna o número retirado

    print(deque)  # saída: Deque(9, 8, 7, 6, 1, 2, 3, 4)
    print(deque.__len__())  # saída: 8

    print(deque.peek_front())  # saída: 9
    print(deque.peek_back())  # saída: 4
