"""
Exercício 1: Pilhas - Baseado nos conhecimentos adquiridos neste bloco,
implemente uma pilha utilizando a Deque como a estrutura interna. Sua pilha
deve conter as operações: push, pop, peek e is_empty
Para este desafio, é necessário efetuar o import da classe Deque e utilizar
seus métodos de acesso para simular uma pilha.
"""


from exercicio_dia_2 import Deque


class Stack:

    def __init__(self):
        self._deque = Deque()

    def __len__(self):
        return len(self._deque)

    def push(self, value):
        self._deque.push_back(value)

    def pop(self):
        return self._deque.pop_back()

    def peek(self):
        return self._deque.peek_back()

    def is_empty(self):
        return not len(self)
