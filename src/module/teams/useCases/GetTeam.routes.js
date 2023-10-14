import { TeamRepository } from "../repository/teamsRepository.js";
import { Router } from "express";

export const getTeam = Router();

const teamRepository = new TeamRepository();

getTeam.get("/getTeam/:team_id", async (request, response) => {

    const { team_id } = request.params;

    const getTeam = await teamRepository.getTeam(team_id);

    if(getTeam == false) {
        return response.status(404).json({ message: "Team Not Found !" });
    }

    return response.status(200).json(getTeam);
});