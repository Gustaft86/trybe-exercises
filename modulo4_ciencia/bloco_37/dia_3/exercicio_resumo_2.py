"""
Separe as palavras de acordo com sua letra inicial

text = ['ana', 'ama', 'joao', 'que', 'ama', 'jose', 'mas',
'jose', 'nao', 'ama', 'ana']

reposta:
a: ['ana', 'ama', 'ama', 'ama', 'ana']
j: ['joao', 'jose', 'jose']
q: ['que']
m: ['mas']
n: ['nao']
"""

text = [
    "ana",
    "ama",
    "joao",
    "que",
    "ama",
    "jose",
    "mas",
    "jose",
    "nao",
    "ama",
    "ana",
]


def screening(text):
    screen = {}

    for word in text:
        first_char = word[0]
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)

    return screen


for key, value in screening(text).items():
    print(f"{key}: {value}")
