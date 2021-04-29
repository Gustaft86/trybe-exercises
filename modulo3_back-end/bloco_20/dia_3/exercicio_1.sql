SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost
FROM sakila.film
WHERE rating = 'PG-13'
AND replacement_cost < 18.00
ORDER BY replacement_cost DESC
LIMIT 100;

SELECT * FROM sakila.customer
WHERE active IS TRUE
AND store_id = 1;

SELECT * FROM sakila.customer
WHERE active IS FALSE	
AND store_id = 1;

SELECT * FROM sakila.film
ORDER BY rental_rate ASC, title ASC
LIMIT 50;