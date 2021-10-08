# Que tal agora relembrarmos o exercício das figuras geométricas? Implemente
# o diagrama de classes abaixo.


from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return 4 * self.lado


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * self.raio * self.raio

    def perimetro(self):
        return 2 * PI * self.raio


# In [7]: Quadrado(5).area()
# Out[7]: 25

# In [8]: Quadrado(5).perimetro()
# Out[8]: 20

# In [9]: Retangulo(5, 2).perimetro()
# Out[9]: 14

# In [10]: Retangulo(5, 2).area()
# Out[10]: 10
