class DatabaseIterable:
    def __init__(self, sql_connector, query_template):
        self.db = sql_connector
        self.query_template = query_template

    def get_page(self, page):
        return self.db.get(query=self.query_template, page=page)

    def __iter__(self):
        """Aqui iniciamos a iteração, retornando um objeto DatabaseIterator
        como Iterador."""

        return DatabaseIterator(self.db)


class DatabaseIterator:
    def __init__(self, sql_connector):
        """No construtor da classe iteradora definimos o valor inicial do
        contador current_page, e também o(s) atributo(s) que será(ão)
        responsável(is) por armazenar/acessar a coleção de dados pela qual
        queremos iterar."""

        self.db = sql_connector
        self.current_page = 0

    def __next__(self):
        """Este método busca no banco de dados a página que queremos e
        incrementa o contador current_page, para retornarmos a próxima página
        na próxima vez que o método for chamado."""

        data = self.iterable.get_page(page=self.current_page)

        """É uma boa prática a utilização da exceção StopIteration() para
        indicar que não foi possível avançar na iteração. Ou seja: tentamos
        acessar uma current_page que não existe."""

        if not data:
            raise StopIteration()

        self.current_page += 1
        return data


# nosso iterador do banco de dados poderia ser acessado assim:

# Primeiro instanciamos o ITERÁVEL
post_paginator = DatabaseIterable(db, post_page_query_template)

# Em seguida podemos usar o for pra iterar
# o ITERADOR é criado implicitamente
for page in post_paginator:
    # faz algo com a pagina, que é uma lista de resultados
    for post in page:
        print(post['title'])


# Exercícios de fixação
# Em seu terminal Python, crie uma nova lista, uma lista normal, com alguns
# elementos. Agora, chame o método __iter__() desta lista, e veja que é
# retornado um objeto list_iterator
# Guarde este objeto em uma varável, e chame o seu método __next__() para ver
# o que acontece!

# In [6]: gustavo
# Out[6]: [1, 5, 8, 4, 1, 9]

# In [7]: interavel = gustavo.__iter__()

# In [8]: interavel.__next__()
# Out[8]: 1

# In [9]: interavel.__next__()
# Out[9]: 5

# In [10]: interavel.__next__()
# Out[10]: 8

# In [11]: interavel.__next__()
# Out[11]: 4

# In [12]: interavel.__next__()
# Out[12]: 1

# In [13]: interavel.__next__()
# Out[13]: 9
