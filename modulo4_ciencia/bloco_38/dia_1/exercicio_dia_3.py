"""
Exercício 3: remover duplicatas de uma LinkedList , atividade extraída e
adaptada do LeetCode . Nesta atividade será necessário implementar um algorítmo
que receba uma LinkedList como argumento e retorne uma nova lista sem elementos
duplicados. Esta função deve respeitar a complexidade O(n) .
Exemplo:
"""

# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3

"""
Nesta atividade estamos utilizando a função criada anteriormente, para que
possamos identificar se o elemento já foi inserido na nova lista, caso não
tenha sido, o adicionaremos:
"""

def delete_duplicates(linkedList):
    list_with_unique_elements = LinkedList()

    while linkedList:
        current_node = linkedList.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
