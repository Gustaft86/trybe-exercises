-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution". OK
-- Escreva uma query para exibir três números em três colunas. OK
-- Escreva uma query para exibir a soma dos números 10 e 15. OK
-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer. OK
-- Escreva uma query para exibir todas as informações de todos os cientistas. OK
-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto. OK
-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética. OK
-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente. OK
-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto. OK
-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas. OK
-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições. OK
-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas. OK
-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas. OK
-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas. OK
-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas. OK

SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 2 AS num1, 8 AS num2, 45 AS num3;
SELECT 10 + 15;
SELECT 10 ^ 2;
SELECT * FROM Scientists.Scientists;
SELECT * FROM Scientists.Projects;
SELECT `Name` AS 'Nome do Projeto', `Hours` AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT `Name` FROM Scientists.Scientists ORDER BY `Name` ASC;
SELECT `Name` FROM Scientists.Projects ORDER BY `Name` DESC;

SELECT CONCAT('O projeto ', `Name`, ' precisou de ',  `Hours`, ' horas para ser concluído.')
AS 'string'
FROM Scientists.Projects;

SELECT `Name`, `Hours` FROM Scientists.Projects
ORDER BY `Hours` DESC
LIMIT 3;

SELECT DISTINCT `Project` FROM Scientists.AssignedTo;

SELECT `Name` FROM Scientists.Projects
ORDER BY `Hours` DESC
LIMIT 1;

SELECT `Name` FROM Scientists.Projects
ORDER BY `Hours` ASC
LIMIT 1
OFFSET 1;

SELECT * FROM Scientists.Projects
ORDER BY `Hours` ASC
LIMIT 5;

SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') FROM Scientists.Scientists;