import postgresSql from "../../../database/dbPostgres.js";
import { randomUUID } from "node:crypto";

export class UserRepository {

    async createUser(datas) {
        const userId = randomUUID();
        const { username, email, password } = datas;

        const createUser = await postgresSql `INSERT into users(user_id, name, email, password) VALUES(${userId}, ${username}, ${email}, ${password}) returning user_id, name, email, password, createdat, teams`;

        return createUser;
    }

    async findUserByUserName(username) {
       const findUserByUserName = await postgresSql `SELECT name from users WHERE name = ${ username }`;

       const queryResult = findUserByUserName.count === 1 ? true : false;
       return queryResult;
    }

    async findUserByEmail(email) {
        const findUserByEmail = await postgresSql `SELECT email from users WHERE email = ${ email }`;

        const queryResult = findUserByEmail.count === 1 ? true : false;
        return queryResult;   
    }
    
}
