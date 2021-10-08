"""
Exercício 2: Nova busca : até o momento nossa estrutura consulta elementos
através da posição. Nesta atividade será necessário criar uma função chamada
def index_of(self, value) , onde ela será responsável por consultar na lista a
existência do valor informado e retornar a posição da primeira ocorrência. Caso
o valor não exista, considere retornar -1 . Esta função deve respeitar a
complexidade O(n).
"""

"""
Nesta atividade é necessário percorrer toda a lista. As condições de parada são
a existência do valor ou ter percorrido toda a lista sem sucesso. O valor é
retornado caso encontrado e -1 caso contrário.
"""

def index_of(self, value):
    position = 1
    current_value = self.head_value
    while current_value:
        if current_value.value == value:
            return position
        current_value = current_value.next
        position += 1
    return -1
