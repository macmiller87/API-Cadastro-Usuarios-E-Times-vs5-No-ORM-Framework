import { UserRepository } from "../repository/userRepository.js";
import { Router } from "express";

export const deleteUser = Router();

const userRepository = new UserRepository();

deleteUser.delete("/delete/:user_id", async (request, response) => {

    const { user_id } = request.params;

    const findUserById = await userRepository.findUserById(user_id);

    if(findUserById == false) {
        return response.status(404).json({ message: "User Not Found !" });
    }

    await userRepository.deleteUser(user_id);

    return response.status(200).json({ message: "User Delete With Sucess !" });
});