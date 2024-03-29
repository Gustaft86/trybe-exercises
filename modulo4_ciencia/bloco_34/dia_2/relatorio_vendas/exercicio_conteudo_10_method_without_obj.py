from abc import ABC, abstractmethod
import gzip
import json
from zipfile import ZipFile


class Serializer(ABC):
    @abstractmethod
    def serialize(cls, data):
        raise NotImplementedError


class ZipCompressor(Serializer):
    FILE_PATH = "./"

    """Um método de classe é chamado diretamente da classe,
    sem uma instância, e ACESSA algum atributo ou método da classe!"""

    @classmethod
    def compress(cls, file_name):
        """Repare que, acima, o atributo cls é como o self: o
        cls é a própria classe, passada automaticamente para
        um método de classe, enquanto o self é a instância"""
        with ZipFile(cls.FILE_PATH + file_name + ".zip", "w") as zip_file:
            zip_file.write(file_name)


class GzCompressor(Serializer):
    """Um método estático é chamado diretamente da classe,
    sem uma instância, e NÃO ACESSA nenhum atributo ou método da classe!"""

    @staticmethod
    def compress(file_name):
        """Como métodos estáticos não acessam classe nem instância,
        o Python não dá a eles nenhum primeiro parâmetro"""
        with open(file_name, "rb") as content:
            with gzip.open(file_name + ".gz", "wb") as gzip_file:
                gzip_file.writelines(content)


class SalesReport(ABC):
    FILE_EXTENSION = ""

    def __init__(self, export_file, compressor=GzCompressor):
        self.export_file = export_file
        self.compressor = compressor

    def build(self):
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    def get_export_file_name(self):
        return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())


class SalesReportJSON(SalesReport):
    FILE_EXTENSION = ".json"

    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    # Sua implementação vai aqui
    pass


# Para testar
relatorio_de_compras = SalesReportJSON("meu_relatorio_1")
relatorio_de_vendas = SalesReportJSON("meu_relatorio_2", ZipCompressor)

relatorio_de_compras.compress()
relatorio_de_vendas.compress()


# Herança: é uma forma de especializar o comportamento de uma classe com outra
# classe;
# Classe Abstrata: uma classe que não pode ser instanciada. Utilizada para
# definir as funções comuns (nem sempre abstratas) e suas assinaturas;
# Métodos Abstratos: um método, ou função, que precisa ser implemetado por uma
# classe herdeira para funcionar corretamente. Criado para definir uma
# Interface;
# Interface: conjunto de métodos que um determinado objeto "possui" - ou,
# o conjunto de mensagens que um objeto é capaz de entender e responder para;
# Composição: incorporar em um objeto outro objeto, para compartilhar código
# de maneira eficaz;
# Métodos de classe: métodos que podem ser chamados diretamente pela classe
# definida, e não por sua instância, para definirmos quando instânciar um
# objeto dessa classe for desnecessário! Utilizam, obrigatóriamente, atributos
# ou métodos internos da classe em seu funcionamento;
# Métodos estáticos: como os métodos de classe, mas não utilizam nada de sua
# classe em seu funcionamento.
# E lembre-se: utilize herança para especialização de uma classe geral e
# composição para compartilhamento de código

# Na Programação Orientada a Objetos, você deve criar entidades ( Abstração )
# com as mensagens que escuta bem definidas ( Encapsulamento ), podendo
# especializar comportamentos de entidades ( Herança ) contanto que garanta
# que a forma de enviar mensagens é consistente ( Polimorfismo )
