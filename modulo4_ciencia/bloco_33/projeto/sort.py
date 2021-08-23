list = [
    {"min_salary": 200, "max_salary": 1000, "date_posted": "2001-10-25"},
    {"min_salary": 100, "max_salary": 5000, "date_posted": "2015-05-10"},
    {"min_salary": 300, "max_salary": 2000, "date_posted": "2010-05-10"},
]

print(
    [
        min_list["min_salary"]
        for min_list in sorted(list, key=lambda x: x.get("min_salary"))
    ]
)

print([100, 200, 300] == [100, 200, 300])

if "":
    print("deu none")

teste = "aqui"
print("deu fora{teste}")
