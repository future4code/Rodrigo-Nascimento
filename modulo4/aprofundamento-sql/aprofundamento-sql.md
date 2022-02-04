1.

a.

Remove a coluna salary da tabela Actor

b.

Muda a coluna gender para sex podendo ter até 6 caracteres

c.

Muda a couluna gender para gender recebendo até 255 caracteres

d.

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2.

a.

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003";

b.

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

c.

UPDATE Actor
SET 
name = "Rodrigo Santoro",
salary = 400000,
birth_date = "1980-02-15",
gender = "male"
WHERE id = "005";

d.

Não apresentou erro mas nada mudou na tabela

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.172 sec

3.

a.

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b.

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

4.

a.

SELECT MAX(salary) FROM Actor;

b.

SELECT MIN(salary) FROM Actor WHERE gender = "female";

c.

SELECT COUNT(*) as Total_Atrizes 
From Actor 
WHERE gender = "female";

d.

SELECT SUM(salary) FROM Actor;

5.

a.

Separou o total de atores por gênero. Devolvendo 3 males e 2 females

b.

SELECT id, name FROM Actor
ORDER BY name DESC;

c.

SELECT * FROM Actor
ORDER BY salary ASC;

d.

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e.

SELECT AVG(salary) 
FROM Actor
WHERE gender = "female";

6.

a.

ALTER TABLE Filmes
ADD playing_limit_date VARCHAR(255);

b.

ALTER TABLE Filmes
CHANGE avaliacao avaliacao FLOAT;

c.

UPDATE Filmes
SET playing_limit_date = "true"
WHERE id = "004";

UPDATE Filmes
SET playing_limit_date = "false"
WHERE id = "001";

d.

DELETE FROM Filmes
WHERE id = "002";

UPDATE Filmes 
SET sinopse = "alala teste"
WHERE id = "002";

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.172 sec

nada foi atualizado





