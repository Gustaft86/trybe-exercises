"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""

import sys


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def insert(self, index, value):
        self.data.insert(index, value)


# vamos inicializar e preencher uma estrutura de dados array
array = Array()
array.insert(0, "Felipe")
array.insert(1, "Ana")
array.insert(2, "Shirley")
array.insert(3, "Miguel")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)


print("-----")
array = Array()
# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)


array.insert(0, "Marcos")
array.insert(1, "Patrícia")
# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print(array, array_memory_size)
array.insert(2, "Matheus")
array.insert(3, "Giovana")
# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(array, array_memory_size)

array.insert(4, "Alberto")
array.insert(5, "Marta")
array.insert(6, "Túlio")
array.insert(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(array, array_memory_size)
