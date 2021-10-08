"""
Exercício 1: Estenda a classe Stack , que escrevemos durante as explicações do
conteúdo, adicionando uma nova função chamada min_value() que irá retornar o
menor valor inteiro presente na pilha. Por exemplo:


# ...

content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value()) # saída: -2
"""

# import sys


class Stack():
    # ...

    # def peek(self):
    #     if self.is_empty():
    #         return None
    #     value = self._data[-1]
    #     return value

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self._data[0]
        for elem in self._data:
            if elem < min_value:
                min_value = elem
        return min_value

    # def clear(self):
    #     self._data.clear()


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída: 1
    print(content_stack.min_value())
    content_stack.push(-5)
    # saída: -5
    print(content_stack.min_value())
