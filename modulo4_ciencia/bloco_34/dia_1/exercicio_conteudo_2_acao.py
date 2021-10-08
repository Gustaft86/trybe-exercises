# CRIA AÇAO DE RESETAR A SENHA

class User:
    def __init__(self, name, email, password):
        # __init__ é para definir um constructor
        """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        self.name = name  # atributos
        self.email = email  # atributos
        self.password = password  # atributos

    def reset_password(self):  # define um método
        print("Envia email de reset de senha")


meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
# cria instancia (ATRIBUTOS, ATRIBUTOS, ATRIBUTOS)
meu_user.reset_password()  # cria instancia

# ABSTRAÇÃO - INSTANCIAR E CRIAR O OBJETO
# ENCAPSULAMENTO - NÃO PRECISA SABER COMO O MÉTODO FAZ, MAS SIM O QUE FAZ.

# Classe : Entidade "geral" que definimos com base no problema que queremos
# resolver.
# Objeto : Entidade "específica", criada a partir das regras definidas pela
# entidade "geral". Pense que a classe é o molde e o objeto a escultura que
# o molde faz!
# Instância : esse é novo! Sabe quando criamos um objeto a partir de uma
# classe! Então! Dizemos que esse objeto é uma instância dessa classe!
# Ou, também, dizemos que a classe instanciou um objeto!
# Atributo : outro novo! Um atributo é uma informação de uma instância que
# você criou. O nome de um User, por exemplo.
# Mensagem : Forma com que objetos interagem - chamando funções uns dos outros.
# Um chamado como esse é um envio de mensagem a outro objeto.
# "User, resete sua senha!"
# Abstração : Pilar da Programação Orientada a Objetos. Se refere a sempre
# criar entidades que farão as ações que resolverão seu problema.
# Encapsulamento : Pilar da Programação Orientada a Objetos. Se refere a poder
# instanciar uma entidade e enviar mensagens a ela sem saber como ela funciona
# por dentro
