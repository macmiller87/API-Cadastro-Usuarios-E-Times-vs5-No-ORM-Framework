import { UserRepository } from "../../users/repository/userRepository.js";
import { TeamRepository } from "../repository/teamsRepository.js";
import { Router } from "express";

export const createTeams = Router();

const userRepository = new UserRepository();
const teamRepository = new TeamRepository();

createTeams.post("/createTeam", async (request, response) => {

    const { user_id } = request.query;
    const { teamname, city, country } = request.body;

    const findUserById = await userRepository.findUserById(user_id);
    const findTeamByTeamName = await teamRepository.findTeamByTeamName(user_id, teamname);

    if(findUserById == false) {
        return response.status(404).json({ message: "User Not Found !" });
        
    }else if(findTeamByTeamName == true) {
        return response.status(401).json({ message: "Team Already Registered For This User !" });

    }else if(teamname === "" || city === "" || country === "") {
        return response.status(401).json({ message: "Null Data is Not Allowed, Please fill in All Datas !" });

    }else if(typeof(teamname) != "string" || typeof(city) != "string" || typeof(country) != "string") {
        return response.status(401).json({ message: "The Fields Must be a String !" });
    }

    const createTeams = await teamRepository.createTeams({
        user_id: user_id,
        teamname: teamname,
        city: city,
        country: country
    });

    return response.status(201).json(createTeams);
});