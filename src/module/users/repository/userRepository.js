import postgresSql from "../../../database/dbPostgres.js";
import { randomUUID } from "node:crypto";

export class UserRepository {

    async createUser(datas) {
        const userId = randomUUID();
        const { username, email, password } = datas;

        const createUser = await postgresSql `INSERT into users(user_id, username, email, password) VALUES(${userId}, ${username}, ${email}, ${password}) returning *`;

        return createUser;
    }

    async findUserByUserName(username) {
       const findUserByUserName = await postgresSql `SELECT username from users WHERE username = ${ username }`;

       const queryResult = findUserByUserName.count === 0 ? false : true;
       return queryResult;
    }

    async findUserByEmail(email) {
        const findUserByEmail = await postgresSql `SELECT email from users WHERE email = ${ email }`;

        const queryResult = findUserByEmail.count === 0 ? false : true;
        return queryResult;   
    }

    async findUserById(user_id) {
        const findUserById = await postgresSql `SELECT user_id from users WHERE user_id = ${ user_id }`;

        const queryResult = findUserById.count === 0 ? false : true;
        return queryResult;   
    }

    async getUser(user_id) {
        const findUserById = await postgresSql `SELECT * FROM users WHERE user_id = ${ user_id }`;

        const queryResult = findUserById.count === 0 ? false : findUserById;
        return queryResult;   
    }

    async updateUserField(user_id, data) {
        
        const { password } = data;

        const updateUserField = await postgresSql `UPDATE users SET password = ${ password } WHERE user_id = ${ user_id } returning *`; 
        return updateUserField;
    }
    
}
