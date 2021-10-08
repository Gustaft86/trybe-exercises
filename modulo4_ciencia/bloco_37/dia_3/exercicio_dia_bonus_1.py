"""
follow-up 1:
Caso a empresa precise fazer essa consulta frequentemente, como você pode
tornar essas consultas mais eficientes? Como você pode guardar o resultado de
consultas anteriores?
Se você calcular para a pessoa 1, você concorda que teremos que calcular o
score de todas as pessoas da empresa? O que podemos fazer é guardar os scores
em uma outra hash para uso futuro. Poderíamos modificar a função score para
receber essa estrutura e fazer a consulta de se aquele score já foi calculado
antes. Mas essa estrutura auxiliar é parte do cálculo dos scores e não faz
sentido que ela fique solta na main . Então vamos envelopar isso tudo dentro de
uma classe.
"""


class Hierarchy:
    def __init__(self, subordinates):
        self.subordinates = subordinates
        self.scores = {}

    def get_score(self, person):
        if person in self.scores:
            print("Já calculei esse score antes")
            return self.scores[person]

        this_score = 1

        for subordinate in self.subordinates[person]:
            this_score += self.get_score(subordinate)
        self.scores[person] = this_score

        return this_score


if __name__ == "__main__":
    subordinates = {1: [2, 3], 2: [4], 3: [], 4: [5, 6], 5: [7], 6: [], 7: []}

    hierarchy = Hierarchy(subordinates)

    print(hierarchy.get_score(1))
    print(hierarchy.get_score(2))
    print(hierarchy.get_score(3))
    print(hierarchy.get_score(4))
    print(hierarchy.get_score(5))
    print(hierarchy.get_score(6))
    print(hierarchy.get_score(7))
