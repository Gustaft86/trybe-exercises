list_a = [1, 3, 4, -43, 2, 0]
list_b = [4, 4, 9, 578, 12]

# iNstanciar direto com listas
set_a = set(list_a)
# print(set_a)

set_b = set(list_b)
# print(set_b)

# Principais operações com set
print(set_a.union(set_b, {-1, -2, -3, -10000}))
print(set_a.intersection(set_b))
print(set_a.difference(set_b))
print(set_b.difference(set_a))

# Operações com muitos conjuntos

# Operadores de comparação
print(set_a == set_b)
print({1, 2, 3, 4} > {2, 3})
