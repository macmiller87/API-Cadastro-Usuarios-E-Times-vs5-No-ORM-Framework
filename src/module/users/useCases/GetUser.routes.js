import { UserRepository } from "../repository/userRepository.js";
import { Router } from "express";

export const getUser = Router();

const userRepository = new UserRepository();

getUser.get("/getUser/:user_id", async (request, response) => {

    const { user_id } = request.params;

    const getUserById = await userRepository.getUser(user_id);

    if(getUserById == false) {
        return response.status(404).json({ message: "User Not Found !" });
    }

    return response.status(200).json(getUserById);
});