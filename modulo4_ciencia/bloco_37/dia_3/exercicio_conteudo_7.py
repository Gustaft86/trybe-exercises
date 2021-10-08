# Exercício 7: Utilize o dicionário criado no exercício 5. Para as chaves
# ímpares, não queremos mais mapear para o seu sobro, mas sim, para o seu
# triplo. Consulte o método keys() e atualize o seu dicionário para a nova
# regra.

double = {i: i*2 for i in range(3, 21)}

for key in double.keys():
    if key % 2 != 0:
        double[key] = key * 3


print(double)
