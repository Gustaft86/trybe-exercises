// Faça os desafios 1 e 2 abaixo sobre o sort utilizando a collection restaurants criada anteriormente.

// Ordene alfabeticamente os restaurantes pelo nome (campo name ).

db.restaurants.find({}, { _id: 0, name: 1 }).sort({ name: 1 });

// Ordene os restaurantes de forma descrescente baseado nas avaliações.

db.restaurants.find({}, { _id: 0, rating: 1 }).sort({ rating: -1 });
