1.
a. Primary Key = chave primária da tabela,
Varchar = string sendo (255) o número máximo de caracteres
Not null = o campo não pode ser nulo
Date = data em ano/mês/dia

b. SHOWDATABASE = mostra a database
SHOW TABLES = mostra as tabelas criadas (Actor)

c. Verifica a estrutura da tabela e os tipos dos campos que tem nela.

2.

b.

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.172 sec

Não pode haver duas chaves com o mesmo valor para chaves primárias já que são únicas.

c.

Faltaram os campos birth_date e gender que foram setados como NOT NULL.

d. 

Faltou o campo name que vou setado como NOT NULL.

e.

Faltaram as " " na declaração de data

3.

a.

SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

b.

SELECT salary from Actor WHERE name = "Tony Ramos";

c.

SELECT gender from Actor WHERE gender = NULL;

Vazio já que só existem os gêneros female e male na tabela

d.

SELECT id, name, salary from Actor WHERE salary <= 500000;

e.

SELECT id, name from Actor WHERE id = "002";

coluna se chama name e não nome

4.

b. 

SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000; 

c.

SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

d.

SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%g%" OR name LIKE "%G%") 
AND salary BETWEEN 350000 AND 900000; 

5.

a.

22

TEXT não tem um limite específico de tamanho além do máximo do banco de dados.

VARCHAR pode ter um limite de tamanho e é armazenado direto na linha de dados.

6.

a.

SELECT id, nome FROM Filmes WHERE id = "003";

b.

SELECT nome, id, dataLancamento, avaliacao FROM Filmes WHERE nome = "Lisbela e o Prisioneiro";

c.

SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= "7";

7.

a.

SELECT * FROM Filmes WHERE nome LIKE "%VIDA%" OR nome LIKE "%vida%";

b. 

SELECT * FROM Filmes 
WHERE nome LIKE "%mãe%" OR sinopse LIKE "%mãe%";

c.

SELECT * FROM Filmes
WHERE dataLancamento < "2022-01-31";

d.

SELECT * FROM Filmes
WHERE dataLancamento < "2022-01-31" AND
(nome LIKE "%lisbela%" or sinopse LIKE "%lisbela%")
AND avaliacao > 7;