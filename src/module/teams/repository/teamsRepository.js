import postgresSql from "../../../database/dbPostgres.js";
import { randomUUID } from "node:crypto";

export class TeamRepository {

    async createTeams(datas) {
        const teamId = randomUUID();
        const { user_id, teamname, city, country } = datas;

        const createTeams = await postgresSql `INSERT INTO teams(team_id, user_id, teamname, city, country) VALUES(${teamId}, ${user_id}, ${teamname}, ${city}, ${country}) RETURNING *`;

        return createTeams;
    }

    async findTeamByTeamName(user_id, teamname) {
        const findTeamByTeamName = await postgresSql `SELECT (user_id, teamname) FROM teams WHERE user_id = ${ user_id } AND teamname = ${ teamname }`;

        const queryResult = findTeamByTeamName.count === 0 ? false : true;
        return queryResult;   
    }

    async getTeam(team_id) {
        const getTeam = await postgresSql `SELECT * FROM teams WHERE team_id = ${ team_id }`;

        const queryResult = getTeam.count === 0 ? false : getTeam;
        return queryResult;   
    }
}