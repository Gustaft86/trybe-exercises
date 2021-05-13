-- Exclua do banco de dados o ator com o nome de "KARL". OK
-- Exclua do banco de dados os atores com o nome de "MATTHEW". OK
-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições. OK
-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
-- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- Exclua o banco de dados e o recrie (use as instruções no início desta aula).

-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- -----------------------------------------------------

SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- -------------------------------------------

SELECT *
FROM sakila.film_text
WHERE description LIKE '%saga%';

DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';

-- -------------------------------------------

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

SELECT * FROM sakila.film_actor; 
SELECT * FROM sakila.film_category;