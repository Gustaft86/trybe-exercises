# Para exercitar nossa capacidade de abstração, vamos modelar algumas partes
# de um software de geometria. Como poderíamos modelar um objeto retângulo?
# 🐦 Para ajudar, segue o exemplo do quadrado. Vamos utilizar a seguinte
# notação para descrever nossas abstrações:

# Nome da abstração
# Quadrado

# atributos/estados
# - lado (tamanho)

# comportamentos
# - calcular area (lado * lado)
# - calcular perímetro (4 * lado)


# Nome da abstração
# Retângulo

# atributos/estados
# - base (tamanho)
# - altura (tamanho)

# comportamentos
# - calcular area (base * altura)
# - calcular perímetro (2 * (base + altura))


class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return self.base * 2 + self.altura * 2


# Para testar!
retangulo_1 = Retangulo(5)
print(retangulo_1.calcular_area())
print(retangulo_1.calcular_perimetro())
