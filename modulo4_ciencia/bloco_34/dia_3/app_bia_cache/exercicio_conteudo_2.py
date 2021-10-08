from abs import ABS, abstractmethod

class Connector(ABS):
    @abstractmethod
    def get_count(token):
        pass

    @abstractmethod
    def count_request():
        pass


class RedisConnector(Connector):
    def __init__(self, address, port):
        # A lógica da conexão ao banco Redis

    def get_count(token):
        # A lógica de acesso ao banco Redis

    def count_request(token):
        # A lógica de acesso ao banco Redis

class SqlConnector(Connector):
    def __init__(self, address, port):
        # A lógica da conexão ao banco SQL

    def get_count(token):
        # A lógica de acesso ao banco SQL

    def count_request(token):
        # A lógica de acesso ao banco SQL

# Agora, uma classe que precisar acessar o banco pode receber como Connector
# tanto uma classe quanto a outra! Veja um exemplo de uso:

import analyzer

# o parâmetro database é um connector
def analyze_data(token, database, data):
    try:
        report = analyzer.complete_report(data)
        database.count_request(token)  # Cliente receberá cobrança
        return report

    # Se a database não tiver o método count_request, vai lançar o erro
    # AttributeError -- e a gente deixa o programa travar se isso acontecer.
    except analyzer.InvalidDataException:
        # A gente lida apenas com InvalidDataException, que é um erro
        # esperado quando o relatório não estiver pronto.
        return  # Cliente não receberá cobrança, pois não geramos o relatório
