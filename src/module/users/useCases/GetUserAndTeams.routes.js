import { UserRepository } from "../repository/userRepository.js";
import { Router } from "express";

export const getUserAndTeams = Router();

const userRepository = new UserRepository();

getUserAndTeams.get("/listUserAndTeams/:user_id", async (request, response) => {

    const { user_id } = request.params;

    const findUserById = await userRepository.findUserById(user_id);

    if(findUserById == false) {
        return response.status(404).json({ message: "User Not Found !" });
    }

    const getUserAndTeams = await userRepository.getUserAndTeams(user_id);

    return response.status(200).json({
        user_id: user_id,
        teams: getUserAndTeams
    });

});