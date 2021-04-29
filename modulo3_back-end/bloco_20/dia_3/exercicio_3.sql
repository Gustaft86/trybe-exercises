SELECT * FROM sakila.customer
WHERE customer_id IN (269, 239, 126, 399, 142);

SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

SELECT email FROM sakila.customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email ASC;

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01'
ORDER BY payment_date;

SELECT * FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;