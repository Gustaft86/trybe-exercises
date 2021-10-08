# Exercício 5
# Implemente um gerenciador de quartos de hotel, simplificado, conforme o
# diagrama a seguir.


# Classe Quarto
# Atributos:
# numero - número do quarto;
# andar - andar do quarto;
# quantidade_de_hospedes - capacidade de hospedagem do quarto;
# preco - valor da hospedagem;
# reservado - sempre inicializado com False , indica o estado do quarto.
# Classe Hospede
# Atributos:
# nome - nome do hospede;
# cpf - hospede (para fins de simplificação, não é necessário validar o CPF).
# Classe Reserva
# Atributos:
# quarto - é composto por uma instância de quarto;
# hospede - é composto por uma instância de hospede.
# Classe Hotel
# Atributos:
# nome - nome do hotel;
# quartos - é composto por uma lista de instâncias de quarto;
# reservas - é composto por uma lista de instâncias de reserva;
# Métodos:
# check_in - recebe uma quantidade indefinida de hospedes e busca por um quarto
# disponível com capacidade suficiente. Se houver um quarto disponível, altera
# o estado do quarto e cria uma reserva para cada hospede. Caso não haja
# quartos disponíveis deve lançar a exceção IndexError com a mensagem "Não há
# quartos disponíveis para essa quantidade de hospedes";
# check_out - recebe uma instância de quarto, alterando seu estado e removendo
# todas as suas reservas;
# quartos_disponiveis - retorna uma lista de quartos disponíveis que comportam
# uma quantidade_de_hospedes (passado por parâmetro), priorizada da menor
# capacidade de hospedes possível para a maior. Lembre-se, para que um quarto
# esteja disponível, além de respeitar a capacidade, ele não pode estar
# reservado.
# Observação: considere todos os atributos como sendo públicos para fins de
# simplificação da implementação.
# 🐦 Dica: Você pode utilizar o método sorted com o parâmetro key , para
# definir seu critério de ordenação. E para utilizar um atributo como critério
# você pode utilizar a função attrgetter do módulo operator .


from operator import attrgetter


class Quarto:
    def __init__(self, numero, andar, quantidade_de_hospedes, preco):
        self.numero = numero
        self.andar = andar
        self.quantidade_de_hospedes = quantidade_de_hospedes
        self.preco = preco
        self.reservado = False


class Hospede:
    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf


class Reserva:
    def __init__(self, quarto, hospede):
        self.quarto = quarto
        self.hospede = hospede


class Hotel:
    def __init__(self, nome, quartos, reservas):
        self.nome = nome
        self.quartos = quartos
        self.reservas = reservas

    def check_in(self, *hospedes):
        try:
            quarto = self.quartos_disponiveis(len(hospedes))[0]
        except (IndexError):
            raise IndexError(
                'Não há quartos disponíveis para essa quantidade de hospedes'
            )
        else:
            quarto.reservado = True
            for hospede in hospedes:
                self.reservas.append(Reserva(quarto, hospede))

    def check_out(self, quarto):
        quarto.reservado = False
        self.reservas = [
            reserva
            for reserva in self.reservas
            if reserva.quarto != quarto
        ]

    def quartos_disponiveis(self, quantidade_de_hospedes):
        return sorted(
            [
                quarto
                for quarto in self.quartos
                if not quarto.reservado and
                quantidade_de_hospedes <= quarto.quantidade_de_hospedes
            ],
            key=attrgetter('quantidade_de_hospedes')
        )
