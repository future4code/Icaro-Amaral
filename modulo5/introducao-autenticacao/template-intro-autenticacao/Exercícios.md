### Exercícios de Introdução a Autenticação

### Exercício 1

a) É impossível usar somente números, pois a lógica do sistema do uuid faz com que sejam números e letras juntos além das aspas que separam as seções do id. Desta forma o melhor é usar strings.

### Exercício 2

a) O código está usando os dados passados pelo arquivo dotenv e inserindo id, email e password na tabela User, através de uma string.

b)

CREATE TABLE IF NOT EXISTS User (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

### Exercício 3

a) O comando "as a String" garante que um valor retorne como uma string. A utilizamos para garantir que o token retorne como uma string.

### Exercício 7 

a) O comando "as any" garante que o valor retorne como qualquer coisa e ele será válido. Utilizamos como "as any" no exercício pois ele pode vir como qualquer coisa.