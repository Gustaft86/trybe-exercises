// exercicio 1

db.bios.find({ _id: 8 }).pretty();

// exercicio 2

db.bios.find({ _id: 8 }, { name: 1 }).pretty();

// exercicio 3

db.bios.find({ _id: 8 }, { _id: 0, name: 1, birth: 1 }).pretty();

// exercicio 4

db.bios.find({ "name.first": "John" }).pretty();

// exercicio 5

db.bios.find().limit(5).pretty();

// exercicio 6

db.bios.find().limit(2).skip(5).pretty();

// exercicio 7

db.books.count();

// exercicio 8

db.books.find({ status: "PUBLISH" }).pretty();

// exercicio 9

db.books.find({}, { _id: 0, title: 1, isbn: 1, pageCount: 1 }).limit(3).pretty();

// exercicio 10

db.books.find({ status: "MEAP" }, { _id: 0, title: 1, authors: 1, status: 1 }).limit(10).skip(5).pretty();
