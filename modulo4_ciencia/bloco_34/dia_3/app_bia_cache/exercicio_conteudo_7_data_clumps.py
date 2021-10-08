# Exemplo:
# Imagine que você tem um aplicativo para uma hamburgueria local, que só faz
# entregas na própria cidade. Nesta plataforma queremos registrar uma pessoa
# com seu nome e endereço para facilitar as entregas.

# class User:
#     def __init__(self, name, street, number, district):
#         '''Você nunca vai passar a rua sem passar também o número e o'''
#         '''bairro!'''
#         self.name = name
#         self.address_street = street
#         self.address_number = number
#         self.address_district = district

# Solução


class Address:
    def __init__(self, street, number, district):
        '''As informações que nunca vem separadas são uma entidade separada'''
        '''agora.'''
        self.street = street
        self.number = number
        self.district = district


class User:
    def __init__(self, name, address):
        self.name = name
        self.address = address

# GeoPoint = namedtuple('GeoPoint', 'lat lon')
# location = GeoPoint(-22.81711234090266, -47.069559317039655)
# print(location.lat) # muito melhor do que location[0]
