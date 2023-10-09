import postgresSql from "../../../database/dbPostgres.js";
import { randomUUID } from "node:crypto";

export class UserRepository {

    async createUser(datas) {
        const userId = randomUUID();
        const { username, email, password } = datas;

        const createUser = await postgresSql `INSERT into users(user_id, username, email, password) VALUES(${userId}, ${username}, ${email}, ${password}) returning user_id, username, email, password, createdat, teams`;

        return createUser;
    }

    async findUserByUserName(username) {
       const findUserByUserName = await postgresSql `SELECT username from users WHERE username = ${ username }`;

       const queryResult = findUserByUserName.count === 1 ? true : false;
       return queryResult;
    }

    async findUserByEmail(email) {
        const findUserByEmail = await postgresSql `SELECT email from users WHERE email = ${ email }`;

        const queryResult = findUserByEmail.count === 1 ? true : false;
        return queryResult;   
    }
    
}
