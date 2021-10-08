# Exercício 9 Alguns sitem possuem paginação feita através de rolagem infinita.
#  Descubra como funciona a rolagem infinita e extraia todas as citações do
#  seguinte site: http://quotes.toscrape.com/scroll .
# 🦜 São 100 citações no total.

import requests


has_next = True
page = 1
counter = 0
while has_next:
    response = requests.get(
        f"http://quotes.toscrape.com/api/quotes?page={page}"
    )
    json_content = response.json()
    for quote in json_content["quotes"]:
        print(quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1
print(counter)
