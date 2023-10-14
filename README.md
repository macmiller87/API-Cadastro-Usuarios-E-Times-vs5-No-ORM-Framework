## API-Cadastro-Usuarios-E-Times-vs5-No-ORM-Framework 

## 🚀 **Tecnologias**

- Nodejs
- Express
- Postgres

### 💻 Projeto

- Projeto na versão 5 com integração ao BD postgres.

- Nesta aplicação está sendo feita uma API, que é possível cadastrar `usuário com (username, email e password)`, a aplicação gera um `user_id` único randômico para o usúario, também é possível cadastrar `times de futebol com (nome, cidade e pais)`,a aplicação gera um `team_id` único randômico para o time, desde que exista um `usuário` já cadastrado para poder fazer o cadastro dos times, essa verificação é feita pelo `user_id` do usuário, também é possível listar todos usuários criados, e seus respectivos times cadastrados, deletar usuários e times e etc.

## 🚀 Como executar

### Rotas da aplicação `users`

#### CreateUser: Post - `/createUser`.

- A rota deve receber `username` , `email` e `password` dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:

"user_id": "",
"username": "",
"email": "",
"password"
"createdat": "",

#### getUser: Get - `/getUser/:user_id`.

- A rota deve receber pelo parâmetro de consulta `query` o `user_id` do usuário a ser consultado, essa consulta só pode acontecer caso o parâmetro passado anteriormente seja válidado. 

#### listUserAndTeams: Get - `/listUserAndTeams/:user_id`.

- A rota deve receber pelo parâmetro de consulta `query` o `user_id` do usuário a ser consultado, essa consulta só pode acontecer caso o parâmetro passado anteriormente seja válidado.

#### updateUserField: PATCH - `/updateUserField/:user_id`.

- A rota deve receber pelo parâmetro de consulta `query` o `user_id` do usuário a ter o campo `password` atualizado, e pelo corpo da requisição o parametro `password`, essa atualização só pode acontecer caso os parâmetros passados anteriormente seja válidados.

#### delete: Delete - `/delete/:user_id`.

- A rota deve receber pelo parâmetro de consulta `query` o `user_id` do usuário a ser deletado, essa consulta só pode acontecer caso o parâmetro passado anteriormente seja válidado.

### Rotas da aplicação `Teams`

#### createTeam: Post = `/createTeam`.

- A rota deve receber `teamName`, `city` e `country` dentro do corpo da requisição, e a rota deve receber pelo parâmetro de consulta `query` o `user_id` do usuário que está cadastrando esse time, cada time deverá estar no seguinte formato:

"team_id": "",
"user_id": "",
"teamName": "",
"city": "",
"country": "",
"createdat": ""

#### getTeam: Get = `/getTeam/:team_id`.

- A rota deve receber pelo parâmetro de consulta `query` o `team_id` do time a ser consultado , essa consulta só pode acontecer caso o parâmetro passado anteriormente sejam válidado.

#### deleteTeam: Delete = `/deleteTeam/:team_id`.

- A rota deve receber pelo parâmetro de consulta `query` o `team_id` do time a ser deletado, essa rota só pode concluir a exclusão com sucesso, caso o parâmetro passado anteriormente sejam válidado.

## Criação das Tabelas no DB Postgres Necessárias para rodar a aplicação.

- O Arquivo `tables.sql` contém o esquema das tabelas a serem criadas no DB Postgres, para poder rodar essa aplicação.

## Para rodar essa aplicação siga os seguintes passos:

- Copie a url do repositório na aba `CODE`.
- Com o git instalado, execute o seguinte comando => `git clone "Aqui vai a url copiada acima"`.
- Com o `Nodejs` e o `Yarn ou Npm` instalados, Na sua IDE preferida, abra o terminal do `git`, e execute o seguinte comando => `yarn ou npm i`, para baixar as dependências da aplicação.
- Para rodar o projeto execute o seguinte comando => `yarn start:dev`.
- Para testar o funcional da aplicação será necessário instalar o software `Insomnia ou Postman ou ainda a extensão ThunderClient no VsCode` e criar as rotas da aplicação citadas acima.

## Deploy Render

- Para utilizar o deploy, deve-se colocar /+ path da rota a fazer a requizição .... exemplo url/createUser .

https://api-cadastro-usuarios-e-times-vs5-no-orm.onrender.com


