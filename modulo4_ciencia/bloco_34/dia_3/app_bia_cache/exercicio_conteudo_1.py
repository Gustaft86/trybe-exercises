import pysql  # Encare essa lib como fictícia!


class SqlConnector:
    # ...

    def __init__(self, address, port):
        print(f'criada uma conexão em {address}:{port}')
        self.db = pysql.connect(address, port)

    def get_count(self, token):
        query = f'SELECT count FROM access WHERE token={token};--'
        return query

    def count_request(self, token):
        query = f'UPDATE access SET count = count+=1 WHERE token={token};--'
        self.db.execute(query)


# RUIM

# import pyredis  # Encare essa lib como fictícia também!

# class RedisConnector:
#     def __init__(self, address, port):
#         print(f'criada uma conexão em {address}:{port}')
#         self.db = pyredis.connect(address, port)

#     def get_count(token):
#         result = self.search(token)
#         amount = result.get("access_count", None)
#         return amount

#     def update_count(token):
#         amount = self.get_count()
#         if amount is None:
#             self.db.insert({token:1})
#         else:
#             self.db.insert({token: amount+1})