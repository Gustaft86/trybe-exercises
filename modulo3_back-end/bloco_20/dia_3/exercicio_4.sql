SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT 
rental_date,
DATE(rental_date),
YEAR(rental_date),
MONTH(rental_date),
DAY(rental_date),
HOUR(rental_date),
MINUTE(rental_date),
SECOND(rental_date)
FROM sakila.rental
WHERE rental_id = 10330;

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= 22
ORDER BY payment_date ASC;