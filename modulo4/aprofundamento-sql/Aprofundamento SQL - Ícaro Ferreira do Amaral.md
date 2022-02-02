## Exercícios de Aprofundamento em SQL

## Exercício 1

# a)

Esse comando remove a coluna salário da tabela.

# b)

Esse comando muda a coluna gender por sex aceitando strings com um máximo de 6 caracteres

# c)

Esse comando muda a coluna gender para aceitar strings com um máximo de 255 caracteres

# d)

Acredito que ficaria ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercício 2

# a)

UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003";

# b)

UPDATE Actor SET name = 'JULIANA PAES' WHERE id = '005';
UPDATE Actor SET name = 'Juliana Paes' WHERE id= '005';

# c)

UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "003";

# d)

Como resultado o MySQL devolveu uma mensagem de sucesso, porém não alterou nada e quando busco na tabela não apareceia nenhuma info.

## Exercício 3

# a)

DELETE FROM Actor WHERE name = 'Fernanda Montenegro';

# b)

DELETE FROM Actor WHERE salary > 1000000 AND gender = 'male';

## Exercício 4

# a)

SELECT MAX(salary) FROM Actor;

# b)

SELECT MIN(salary) FROM Actor WHERE gender = 'female';

# c)

SELECT COUNT(*) FROM Actor WHERE gender = 'female';

# d)

SELECT SUM(salary) FROM Actor;

## Exercício 5

# a)

Pelo que entendi, o objetivo da query é agrupar os atores por gênero.

# b)

SELECT id, name FROM Actor ORDER BY name ASC;

# c)

SELECT * FROM Actor ORDER BY salary;

# d)

SELECT * FROM Actor ORDER BY salary LIMIT 3;

# e)

SELECT AVG(salary) FROM Actor GROUP BY gender ORDER BY gender;

## Exercício 6