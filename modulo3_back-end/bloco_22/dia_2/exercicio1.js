// Selecione e faça a contagem dos restaurantes presentes nos bairros (campo borough ) Queens , Staten Island e Bronx .

db.restaurants.count({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } });

// Selecione e faça a contagem dos restaurantes que não possuem culinária (campo cuisine ) do tipo American.

db.restaurants.count({ cuisine: { $nin: ["American"] } });

// Selecione e faça a contagem dos restaurantes que possuem avaliação (campo rating ) maior ou igual a 8 .

db.restaurants.count({ rating: { $gte: 8 } });

// Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4 .

db.restaurants.count({ rating: { $lt: 4 } });

// Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7 .

db.restaurants.count({ rating: { $nin: [5, 6, 7] } });
