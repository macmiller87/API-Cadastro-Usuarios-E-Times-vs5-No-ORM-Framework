import postgresSql from "./dbPostgres.js";

await postgresSql`

    CREATE TABLE "users" (
        "user_id" TEXT NOT NULL PRIMARY KEY,
        "username" TEXT NOT NULL UNIQUE,
        "email" TEXT NOT NULL UNIQUE,
        "password" TEXT NOT NULL,
        "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
`.then(() => console.log("Tabela Users Criada"));

await postgresSql`

    CREATE TABLE "teams" (
        "user_id" TEXT NOT NULL,
        "team_id" TEXT NOT NULL PRIMARY KEY,
        "teamname" TEXT NOT NULL,
        "city" TEXT NOT NULL,
        "country" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

         CONSTRAINT "teams_user_id_fkey" FOREIGN KEY("user_id") REFERENCES "users" ("user_id") ON DELETE CASCADE ON UPDATE CASCADE
    )
`.then(() => console.log("Tabela Teams Criada"));