# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu
# conteúdo e calcule a porcentagem de livros em cada categoria,
# em relação ao número total de livros. O resultado deve ser escrito
# em um arquivo no formato CSV como o exemplo abaixo.

import json
import csv


def retrieve_books(file):
    content = file.read()
    # print(content[0:1000])
    # print(json.loads(content)[0:2])
    # print(json.load(file)[0])
    # content = file.read()
    # teste = [json.loads(line) for line in content]
    # print(teste)
    return json.loads(content)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, headers, rows):
    writer = csv.writer(file)
    writer.writerow(headers)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)
    print(book_count_by_category)

    # calculate porcentage
    number_of_books = len(books)
    print(number_of_books)
    books_percentage_rows = calculate_porcentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    headers = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, headers, books_percentage_rows)
