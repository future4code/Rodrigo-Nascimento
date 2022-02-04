1.

a.

Foreign Key é o campo que estabele relação entre tabelas.

b.

INSERT INTO Rating VALUES (
	"001", "Filme aleatório, texto aleatório", "9", "001"
);

c.

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-rodrigo-santos-do-nascimento`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Não conseguiu cadastrar pq não encontrou o id da tabela de referência

d.

ALTER TABLE Filmes DROP COLUMN avaliacao;

e.

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-rodrigo-santos-do-nascimento`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Não é possível deletar, pois ela está ligada a outra tabela.

2.

b.

INSERT INTO MovieCast VALUES
("001", "001"), ("001", "003"), ("003", "003"), ("003", "004"), ("004", "005"),
("004", "005");

c.

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-rodrigo-santos-do-nascimento`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Não achou a chave que ela tá referenciada

d.

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-rodrigo-santos-do-nascimento`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Está associada a outra tabela e primeiro eu teria que excluir a tabela de ligação para depois apagar o ator.

3.

a. o ON serve para relacionar a coluna de uma tabela a coluna de outra tabela

b.

SELECT Filmes.nome as nome, Filmes.id as id, Rating.rate as nota 
FROM Filmes
JOIN Rating ON Filmes.id = Rating.movie_id;



