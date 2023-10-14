import { TeamRepository } from "../repository/teamsRepository.js";
import { Router } from "express";

export const deleteTeam = Router();

const teamRepository = new TeamRepository();

deleteTeam.delete("/deleteTeam/:team_id", async (request, response) => {

    const { team_id } = request.params;

    const findTeamById = await teamRepository.findTeamById(team_id);

    if(findTeamById == false) {
        return response.status(404).json({ message: "Team Not Found !" });
    }

    await teamRepository.deleteTeam(team_id);

    return response.status(200).json({ message: "Team Delete Whith Success !" });
});