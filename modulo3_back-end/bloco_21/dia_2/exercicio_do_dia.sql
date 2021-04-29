-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales )
	-- de cada filme.
    
SELECT PM.title, BO.domestic_sales, BO.international_sales FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS PM
ON PM.id = movie_id;
    
-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número
	-- maior de vendas internacionais ( internationa_sales ) do que vendas nacionais ( domestic_sales ).
    
SELECT PM.id, PM.title, BO.domestic_sales, BO.international_sales FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS PM
ON PM.id = movie_id
WHERE BO.international_sales > BO.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT M.*, BO.rating 
FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS M
ON M.id = movie_id
ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes
	-- em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas.
    -- Retorne os nomes dos cinemas em ordem alfabética.

SELECT * FROM Pixar.Theater;

SELECT * FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;
-- NÃO FAZ SENTIDO TRAZER AS PKS UMA VEZ QUE NAO CORRESPONDEM A ESSA NOVA TABELA CRIADA PELO JOIN
SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Theater t
LEFT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e,
	-- adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
    
SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Theater t
RIGHT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes
	-- que possuem avaliação maior que 7.5.

SELECT title FROM Movies
WHERE id IN (
    SELECT movie_id from BoxOffice
    WHERE rating > 7.5
);

SELECT m.title
FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
WHERE b.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes
	-- lançados depois de 2009.

SELECT rating FROM BoxOffice
WHERE movie_id IN (
    SELECT id FROM Movies
    WHERE year > 2009
);
    
SELECT b.rating
FROM BoxOffice b
INNER JOIN Movies m
ON b.movie_id = m.id
WHERE m.year > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT `name`, location FROM Pixar.Theater AS T
WHERE EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE T.id = theater_id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT `name`, location FROM Pixar.Theater AS T
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE T.id = theater_id
);