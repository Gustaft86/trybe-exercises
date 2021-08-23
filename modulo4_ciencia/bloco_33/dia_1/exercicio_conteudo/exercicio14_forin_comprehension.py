# Exercício 14: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação.
# Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100.
# Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10] .
# Escreva um código capaz de gerar as avaliações após a mudança.
# Neste caso o resultado deveria ser [60, 80, 50, 90, 100] .

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)
print(new_ratings)

# Embora essa solução seja perfeita, é muito mais comum ver Pythonistas escrevendo compreensões de lista:

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
print(new_ratings)
