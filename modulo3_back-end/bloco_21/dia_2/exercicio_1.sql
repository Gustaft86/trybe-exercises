-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.

SELECT A.actor_id, CONCAT(A.first_name, ' ', A.last_name) AS `actor`, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.

SELECT S.first_name, S.last_name, A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente,
	-- juntamente com o id do endereço e o nome da rua onde o cliente mora.
    -- Essas informações podem ser encontradas nas tabelas customer e address .

SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene"
	-- em seus nomes. As informações podem ser encontradas nas tabelas address e customer.

SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE 
	A.district = 'California'
	AND C.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente.
	-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.

SELECT C.first_name, COUNT(A.address)
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.first_name
ORDER BY C.first_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006.
	-- Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT S.first_name, S.last_name, AVG(P.amount)
FROM sakila.staff AS S
INNER JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.first_name, S.last_name;

SELECT stf.first_name, stf.last_name, AVG(pay.amount)
FROM staff AS stf
INNER JOIN payment pay ON stf.staff_id = pay.staff_id
WHERE year(pay.payment_date) = 2006
GROUP BY stf.first_name, stf.last_name;

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film.
	-- Dica: você precisará fazer mais de um JOIN na mesma query.
    
SELECT A.actor_id, A.first_name, F.film_id, F.title
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FA ON A.actor_id = FA.actor_id
INNER JOIN sakila.film AS F ON F.film_id = FA.film_id;
