from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)

# >>> carteado = Baralho()
# >>> teste = {cartas for cartas in carteado}
# >>> print(teste)
# {
#     <J de ouros>,
#     <3 de copas>,
#     <6 de paus>,
#     <Q de ouros>,
#     <4 de copas>,
#     <7 de paus>,
#     <K de ouros>,
#     <5 de copas>,
#     <8 de paus>,
#     <A de espadas>,
#     <6 de copas>,
#     <9 de paus>,
#     <2 de espadas>,
#     <7 de copas>,
#     <10 de paus>,
#     <3 de espadas>,
#     <8 de copas>,
#     <J de paus>,
#     <4 de espadas>,
#     <9 de copas>,
#     <Q de paus>,
#     <5 de espadas>,
#     <10 de copas>,
#     <K de paus>,
#     <6 de espadas>,
#     <J de copas>,
#     <7 de espadas>,
#     <Q de copas>,
#     <8 de espadas>,
#     <K de copas>,
#     <9 de espadas>,
#     <A de ouros>,
#     <10 de espadas>,
#     <2 de ouros>,
#     <J de espadas>,
#     <3 de ouros>,
#     <Q de espadas>,
#     <4 de ouros>,
#     <K de espadas>,
#     <5 de ouros>,
#     <A de paus>,
#     <6 de ouros>,
#     <2 de paus>,
#     <7 de ouros>,
#     <3 de paus>,
#     <8 de ouros>,
#     <4 de paus>,
#     <9 de ouros>,
#     <A de copas>,
#     <5 de paus>,
#     <10 de ouros>,
#     <2 de copas>
# }
# >>>
