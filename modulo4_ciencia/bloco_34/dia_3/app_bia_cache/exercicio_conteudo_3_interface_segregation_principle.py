''' ABC é Abstract Base Class. Herdar desta classe indica que estamos fazendo
uma classe abstrata, que neste caso também é uma Interface, pois não contem
implementações, apenas definições de métodos.

Estes metodos DEVEM ser implementados pelas classes herdeiras, por isso
utilizamos decorator `@abstractmethod`: se estes metodos não forem sobrescritas
por implementação da class herdeira, Python avisa que estamos cometendo erro'''

from abc import ABC, abstractmethod


class ReadOnlyConnector(ABC):
    @abstractmethod
    def get_count(self, token):
        pass


# Como FullConnector deve também ser capaz de ler,
# ela é uma classe abstrata que herda de outra classe abstrata!
class FullConnector(ReadOnlyConnector):
    @abstractmethod
    def count_request(self, token):
        pass

# Uma classe abstrata exige a implementação de todos os seus métodos.
# Uma implementação incompleta não poderá ser instanciada!
# class SQLConnector(FullConnector):
#     def count_request(self, token):
#         ...
#
# TypeError: não pode instanciar porque não implementa o método get_count
# sql = SQLConnector()


# class ReadOnlySqlConnector(ReadOnlyConnector):
#     # ...

# class RedisConnector(FullConnector):
#     # ...
