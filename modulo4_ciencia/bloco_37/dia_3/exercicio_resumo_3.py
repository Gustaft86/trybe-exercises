"""
Quais elementos da lista A também ocorrem na lista B?
Ou seja, qual interseção entre lista
"""

listA = [1, 2, 3, 4, 5, 6]
listB = [4, 5, 6, 7, 8, 9]

# resposta: [4, 5, 6]

# O(n + m)


def instersection(listA, listB):
    # criar uma dict da listA
    seen_in_a = {}
    for item in listA:
        if item not in seen_in_a:
            seen_in_a[item] = True

    ans = []
    for item in listB:
        if item in seen_in_a:
            ans.append(item)

    return ans


print(instersection(listA, listB))
