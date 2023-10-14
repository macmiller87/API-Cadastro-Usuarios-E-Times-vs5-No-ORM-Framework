import postgresSql from "../../../database/dbPostgres.js";
import { randomUUID } from "node:crypto";

export class UserRepository {

    async createUser(datas) {
        const userId = randomUUID();
        const { username, email, password } = datas;

        const createUser = await postgresSql `INSERT INTO users(user_id, username, email, password) VALUES(${userId}, ${username}, ${email}, ${password}) RETURNING *`;

        return createUser;
    }

    async findUserByUserName(username) {
       const findUserByUserName = await postgresSql `SELECT username FROM users WHERE username = ${ username }`;

       const queryResult = findUserByUserName.count === 0 ? false : true;
       return queryResult;
    }

    async findUserByEmail(email) {
        const findUserByEmail = await postgresSql `SELECT email FROM users WHERE email = ${ email }`;

        const queryResult = findUserByEmail.count === 0 ? false : true;
        return queryResult;   
    }

    async findUserById(user_id) {
        const findUserById = await postgresSql `SELECT user_id FROM users WHERE user_id = ${ user_id }`;

        const queryResult = findUserById.count === 0 ? false : true;
        return queryResult;   
    }

    async getUser(user_id) {
        const findUserById = await postgresSql `SELECT * FROM users WHERE user_id = ${ user_id }`;

        const queryResult = findUserById.count === 0 ? false : findUserById;
        return queryResult;   
    }

    async getUserAndTeams(user_id) {
        const findUserById = await postgresSql `SELECT * FROM teams WHERE user_id = ${ user_id }`;

        const queryResult = findUserById.count === 0 ? false : findUserById;
        return queryResult;   
    }

    async updateUserField(user_id, data) {
        const { password } = data;

        const updateUserField = await postgresSql `UPDATE users SET password = ${ password } WHERE user_id = ${ user_id } RETURNING *`; 
        return updateUserField;
    }
    
    async deleteUser(user_id) {
        await postgresSql `DELETE FROM users WHERE user_id = ${ user_id }`;
    }
}
