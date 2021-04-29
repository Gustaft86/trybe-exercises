-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.

SELECT id, title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.id = book_id
    AND returned = 0
);

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.

SELECT id, title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.id = book_id
    AND returned = 0
) AND B.title LIKE '%lost%';

-- --------------------------

SELECT id, title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.id = book_id
    AND returned = 0
    AND B.title LIKE '%lost%'
);

-- --------------------------

SELECT id, title
FROM hotel.Books b
WHERE EXISTS(
    SELECT *
    FROM hotel.Books_Lent
    WHERE b.Id = book_id AND b.title like '%lost%'
);

-- Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.

SELECT `Name` FROM hotel.Customers AS C
WHERE EXISTS(
	SELECT * FROM hotel.CarSales
	WHERE CustomerID = C.CustomerID
);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente
	-- e o modelo do carro de todos os clientes que fizeram compras de carros.

SELECT * FROM hotel.Cars;
SELECT * FROM hotel.Customers;
SELECT * FROM hotel.CarSales;

-- SELECT Ctm.`Name`, Ca.`Name` FROM hotel.Customers AS Ctm
-- WHERE EXISTS(
-- 	SELECT * FROM hotel.Cars AS Ca
-- 	INNER JOIN hotel.CarSales AS CS
-- 	ON Ca.Id = CS.CarID
-- 	WHERE CS.CustomerID = Ctm.CustomerID
-- );

SELECT * FROM hotel.Cars AS Ca
INNER JOIN hotel.CarSales AS CS
ON Ca.Id = CS.CarID;

SELECT cus.name, car.name 
FROM Cars car
INNER JOIN Customers cus
WHERE EXISTS(
    SELECT *
    FROM hotel.CarSales
    WHERE CustomerID = cus.CustomerId
    AND CarID = car.Id
);
