a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = [1, 2, 3]
# Quando um * está presente no desempacotamento, os valores
# são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]


objeto = {
    "Open Source": 2,
    "Mobile": 1,
    "Java": 96,
    "Software Engineering": 16,
    "Internet": 41,
    "Web Development": 17,
    "Miscellaneous": 2,
    "Microsoft .NET": 34,
    "Microsoft": 8,
    "Next Generation Databases": 1,
    "PowerBuilder": 7,
    "Client-Server": 11,
    "Computer Graphics": 6,
    "Object-Oriented Programming": 4,
    "S": 1,
    "Networking": 7,
    "Theory": 7,
    "Programming": 12,
    "Python": 6,
    "Mobile Technology": 6,
    "Business": 12,
    "P": 1,
    "XML": 4,
    "Perl": 6,
    "java": 1,
    "Microsoft/.NET": 1,
    "Miscella": 1,
    "Object-Technology Programming": 1,
    "": 2,
    "internet": 1,
    ".NET": 1,
    "Algorithmic Art": 1,
    "PHP": 1,
    "SOA": 1,
    "Computer Graph": 1,
    "Client Server": 1,
    "In Action": 1,
    "Software Development": 1,
}


for teste in objeto.items():
    print(teste)
