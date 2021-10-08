# class ReportAnalyzer:
#     def __init__(self, loader):
#         self.loader = loader

#     def average(self):
#         # este é um dos métodos que espera uma lista de dicionários
#         data = self.loader.load_data()
#         # aqui ela soma o valor na chave final_price em cada item da lista
#         total = sum(order['final_price'] for order in data)
#         return total / len(data)
#     ...

# O código acima é o código do nosso sistema, que espera que os loaders
# retornem uma lista de dicionários. Mas olhem no exemplo abaixo como a
# ferramenta retorna os dados:

from gerenciator3000 import ReportLoader

loader = ReportLoader()
print(loader.headers)  # ['id', 'date', ..., 'final_price']
print(loader.rows[0])  # [1337, '2020-11-20', ..., 2350.5]

# SOLUÇÃO


class G3000LoaderAdapter:
    # aqui o loader é uma instancia do gerenciator3000.ReportLoader!
    def __init__(self, loader):
        self.loader = loader

    def load_data(self):

        # o zip junta uma lista de chaves e uma lista de valores
        # e cria um dicionário! por exemplo:
        # zip(['nome', 'idade'], ['Capi', 34]) => {'nome': 'Capi', 'idade': 34}

        return [zip(loader.headers, row) for row in loader.rows]  # tcharans


# Lindo! Acabamos de utilizar outro padrão, chamado Adapter . Ele permite
# converter a interface de uma classe em outra interface, esperada pelo cliente
# (isto é, o código que usa a nossa classe). O Adapter permite que interfaces
# incompatíveis trabalhem em conjunto – o que, de outra forma, seria impossível
# Veja só:

from gerenciator3000 import ReportLoader
from project.loaders import G3000LoaderAdapter
from project.analyzer import ReporterAnalyzer

# o loader da ferramenta é carregado do jeito que a ferramenta recomenda
g3000_loader = ReportLoader(...)
# o adaptador recebe o loader da ferramenta.
loader = G3000LoaderAdapter(g3000_loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader.
analyzer = ReportAnalyzer(loader)

analyzer.average()  # JUST WORKS (tm)


# 4. Exercício de fixação
# Olhe ao seu redor e tente identificar objetos que fazem o papel de um
# Adapter: um objeto que é necessário para que duas outras coisas funcionem
# juntas, que não conseguiriam funcionar juntas sem este adaptador.
