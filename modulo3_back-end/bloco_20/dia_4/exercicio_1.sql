-- Insira um novo funcionário na tabela sakila.staff. OK
-- 		Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada! OK
-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query. OK
-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor. OK
-- Cadastre três categorias de uma vez só na tabela sakila.category. OK
-- Cadastre uma nova loja na tabela sakila.store. OK

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Gustavo', 'Thirion', 11, 'gustavo.fthirion@gmail.com', 1, 1, 'gustaft86', 'x1x2x3x4');

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, username, password)
VALUES ('Rachel', 'Marotta', 11, 'kelmarotta@icloud.com', 2, 'kel', 'y1y2y3y4'),
('Geraldo', 'Marotta Thirion', 11, 'gege@gmail.com', 1, 'ges', '123456');

SELECT * FROM sakila.staff
ORDER BY staff_id DESC;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
	LIMIT 5;
    
    
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
	VALUES ('Anime'),
    ('Bollywood'),
    ('Spanish');
    
    
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);
