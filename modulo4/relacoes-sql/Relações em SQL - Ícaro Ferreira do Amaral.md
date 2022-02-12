## Exercícios da aula Relações em SQL - Ícaro Ferreira do Amaral

## Exercício 1

# a)

A chave estrangeira é a referência de uma chave primária de outra tabela, onde é igualada para retornar os dados dessa tabela.

# b)

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"001",
"Ótimo Filme, adorei!",
10,
"001"
);

# c)

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-icaro-ferreira-do-amaral`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Pelo que entendo, não posso criar ou atualizar a tabela filha onde a chave não é reconhecida.

# d)

ALTER TABLE Movie DROP COLUMN rating;

# e)

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-icaro-ferreira-do-amaral`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não posso deletar ou atualizar uma linha de uma tabela pai caso ocorre interferencia direta com a tabela filho.

## Exercício 2

# a)

Relaciona atores da tabela de atores aos filmes da tabela de filmes.

# b)

INSERT INTO MovieCast VALUES
('001','5'), ('002','6'), ('003','7'),
('004','8'), ('002','8'), ('002','9'),
('003','10'), ('004','1');

# c)

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-icaro-ferreira-do-amaral`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não adiciona ou atualiza devido às chaves não baterem.

# d)

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-icaro-ferreira-do-amaral`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Impossível deletar pois a chave estrangeira depende dele.

## Exercício 3

# a)

O operador ON é um condicional, sem ele a tabela vai ficar fora de ordem e vai multiplicar os itens, ele age como um filtro que busca valores correspondentes a condição passada.

# b)

SELECT Movie.id, Movie.title, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;