"""
Gabarito dos exercícios
A seguir encontra-se uma sugestão de solução para o exercício proposto.
Exercício 1: Aprimorando a classe Deque - Nossa classe Deque já atende as
principais operações que esse TAD nos oferece 🚀 mas que tal melhorarmos? Para
isso você deve adicionar os seguintes métodos:
a. clear(self) - Este método deve ser responsável por limpar a estrutura,
eliminando todos os elementos contidos dentro da deque.
"""


# # 1
# def clear(self):
#     self._data.clear()

# # 2
# def clear(self):
#     self._data = list()

# # 3
# def clear(self):
#     del self._data[:]

# # 4
# def clear(self):
#     while self._data:
#         self.pop_back()

# 5
def clear(self):
    while self._data:
        self.pop_front()


"""
b. exists(self, value) - Este método deve ser usado para indicar se o valor do
argumento existe em nossa estrutura. Retorne True se existir e False caso
contrário.
Nota: Fique a vontade para escolher por qual extremidade será iniciada a
consulta.
"""


# 1
def exists(self, value):
    return value in self._data

# #2
# def exists(self, value):
#     return self._data.count(value) > 0


"""
c. peek(self, position, order) - Este método deve ser usado para retornar o
valor do conteúdo da posição indicada. A peculiaridade desse método é a ordem
que essa consulta deve ser feita. Caso o campo order não seja informado, a
consulta deve ser realizada através da extremidade da esquerda front, no
entanto, caso o campo possua o valor desc , a consulta deve ser através da
extremidade da direita back .
Como exemplo, assuma uma deque composto com os seguintes elementos:
"""


# # 1
# def peek(self, position, order=None):
#     if position < 0 or position > len(self) - 1:
#         return None
#     if not order:
#         return self._data[position]
#     return self._data[::-1][position]

# 2
def peek(self, position, order=None):
    if position < 0 or position > len(self) - 1:
        return None

    if not order:
        for index, value in enumerate(self._data):
            if position == index:
                return value
    else:
        for index, value in enumerate(self._data[::-1]):
            if position == index:
                return value

    return None
