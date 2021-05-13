-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50.
	-- Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível.
    -- Finalize ordenando os resultados de forma decrescente.

SELECT * FROM sakila.film;

SELECT rating, AVG(length) AS `average_duration`
FROM sakila.film
GROUP BY rating
HAVING `average_duration` BETWEEN 115.0 AND 121.50
ORDER BY `average_duration` DESC;

-- Usando a query a seguir, exiba apenas os valores de total de substituição de custo que estão acima de $3950.50.
	-- Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. 
    -- Finalize ordenando os resultados de forma crescente.

SELECT rating, SUM(replacement_cost) AS `total_replacement_cost`
FROM sakila.film
GROUP by rating
HAVING `total_replacement_cost` > 3950.50
ORDER BY `total_replacement_cost` DESC;
