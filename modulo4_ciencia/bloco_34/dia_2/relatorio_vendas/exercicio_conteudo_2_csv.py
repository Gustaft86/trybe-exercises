# Altere o código da classe SalesReport para que ela, além de gerar relatórios
# em JSON, gere relatórios em CSV também. Defina, primeiro, como você fará a
# extensão da lógica para depois gerar o CSV mesmo. Não gaste mais que cinco
# minutos nesse exercício! Quando o relógio apitar, volte para a leitura que
# vamos refletir sobre a experiência!

import json
from csv import DictWriter


class SalesReport:
    def __init__(self, export_file):
        self.export_file = export_file + ".json"

    def build(self):
        """Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos!"""
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    def serialize(self):
        with open(self.export_file, "w") as file:
            json.dump(self.build(), file)

    def serialize_csv(self):
        # nome de função condizente, POREM ATERIOR FICOU RUIM
        with open("meu_relatorio.csv", "w") as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)


# Para testar
relatorio_de_vendas = SalesReport("meu_relatorio")
relatorio_de_vendas.serialize()
relatorio_de_vendas.serialize_csv()


# Para adicionar a funcionalidade você precisou mudar a assinatura
# (nome e parâmetros) de alguma função? Se sim, você vai precisar mudar todos
# os códigos que usam essa função, então não podemos fazer isso sem gerar
# muito retrabalho! Não podemos fazer a mudança assim.
# Os nomes das suas funções ainda estão coerentes? Por exemplo, se uma se
# chama serialize_csv , a outra deve se chamar serialize_json . Chamá-la só
# de serialize é confuso - se temos mais de uma serialização, a serialize
# é qual delas?!
# Você criou uma nova classe ? Se sim, ela duplicou alguma lógica? Se duplicou,
# por exemplo, a lógica de construção do relatório, na função build , não
# rola ❌!
# Você mudou o nome da classe? Se sim, voltamos ao problema de modificar
# código já existente. Não dá!
