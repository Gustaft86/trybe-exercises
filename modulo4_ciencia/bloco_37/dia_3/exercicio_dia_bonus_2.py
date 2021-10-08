"""follow-up 2:
Escreva um método para incluir uma nova pessoa na equipe de uma outra pessoa.
Seu método deve considerar que cada pessoa pode ter no máximo k pessoas em seu
time. Se o time estiver cheio, a nova contratada pode ser alocada na equipe de
qualquer pessoa abaixo dela, não precisando ser na equipe imediatamente abaixo.
Agora que a classe consegue adicionar pessoas, não precisamos mais receber a
estrutura subordinates ; a própria classe vai cuidar de montar essa estrutura
enquanto adiciona as pessoas.
Vamos definir um exemplo para pensar: Se eu quiser adicionar a pessoa 8 na
equipe de 4, com k=2?
A equipe de 4 está cheia, então eu preciso tentar encaixar na equipe de algum
subordinado a 4, ou seja, na equipe de 5 ou de 6. É super importante observar
que eu posso incluir 8 em qualquer lugar abaixo 4. Isso significa que eu sempre
vou conseguir incluir a pessoa, pois no final da cadeia, haverá uma pessoa sem
equipe e eu posso atribuir a nova contratada para ela. Ou seja, ao invés de
tentar olhar em "largura" e tentar incluir em 5 e depois em 6, eu posso ir
descendo na cadeia até achar um lugar que ela caiba, olhando em "profundidade":
olho 4, depois 5, se 5 estivesse cheio, olho a 7.
Última coisa: Você considerou se a pessoa que está sendo incluída é a primeira
de todas?"""


class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def add_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
        else:
            self.add_person(self.subordinates[boss][0], person)

    def get_score(self, person):
        return self.scores[person]


if __name__ == "__main__":
    hierarchy = Hierarchy(2)
    hierarchy.add_person(None, 1)
    hierarchy.add_person(1, 2)
    hierarchy.add_person(1, 3)
    hierarchy.add_person(2, 4)
    hierarchy.add_person(4, 5)
    hierarchy.add_person(4, 6)
    hierarchy.add_person(5, 7)
    print("\nAntes das novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}")

    hierarchy.add_person(4, 8)
    hierarchy.add_person(4, 9)
    print("\nApós novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}\n")

"""follow-up 3:
Se você adicionar uma nova contratação à lista de subordinadas, a estrutura que
você fez no follow-up 1 está desatualizada. Modifique suas funções para que
essa estrutura seja atualizada junto com a adição de uma nova contratação. Faça
isso sem rodar de novo a função score() e lembre-se de atualizar todos os
scores desde a pessoa da presidência até a equipe que a nova contratação entrou
Quando você adiciona uma pessoa, ela pode ser adicionada em qualquer equipe
abaixo dela. Como você recebe o primeiro boss , para atualizar o score entre
esse boss e o local que a pessoa foi efetivamente alocada, basta ir atualizando
o score na medida em que você vai tentando uma nova equipe.
A parte mais complicada é atualizar desde a presidência até o primeiro boss. A
gente tem uma estrutura que nos diz quem é subordinado a quem, mas não temos um
jeito imediato de consultar quem é chefe de quem. Então uma possível solução é,
a cada inserção, manter o controle da chefia imediata daquela pessoa. Na
solução proposta abaixo, adicionamos a hash imediate_boss , que é atualizada
antes de realmente tentarmos alocar a pessoa. A função add_person foi renomeada
para fit_person e agora atualizada o score de cada boss que tentamos encaixar a
nova contratada.
Como os scores são atualizados na medida em que fazemos as inserções, a função
get_score agora precisa apenas fazer uma consulta simples à estrutura scores .

"""
