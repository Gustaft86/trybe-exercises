from datetime import datetime, date
from collections import Counter


datas = [
    {"date_valid": "2019-11-08", "exp_by": "2022-11-08"},
    {"date_valid": "2019-11-15"},
    {"date_valid": "2019-11-25"},
    {"date_valid": "1999-05-01"},
    {"date_valid": "2021-05-31"},
]

data_antiga = max([data["date_valid"] for data in datas], key=str)

print(data_antiga)

dias = (
    datetime.strptime(datas[0]["exp_by"], "%Y-%m-%d").date() - date.today()
).days
print(dias)

print(max([2, 8, 9, 5, 10], key=int))

print("2019-11-08" < "2022-11-08")

print("2019-11-08" < str(date.today()))

teste = ["teste1", "teste2", "teste3", "teste2", "teste3", "teste2"]
print(Counter(teste).most_common()[0][0])

z = ["blue", "red", "blue", "yellow", "blue", "red"]
print(Counter(z))
Counter({"blue": 3, "red": 2, "yellow": 1})
