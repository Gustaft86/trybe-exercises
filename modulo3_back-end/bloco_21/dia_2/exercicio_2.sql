SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;


SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
LEFT JOIN sakila.actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- --------------------------------
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
RIGHT JOIN sakila.actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- --------------------------------
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
INNER JOIN sakila.actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- --------------------------------
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração.
	-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT * FROM sakila.film;

SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length 
AND t1.rental_duration BETWEEN 2 AND 4
AND t2.rental_duration BETWEEN 2 AND 4;