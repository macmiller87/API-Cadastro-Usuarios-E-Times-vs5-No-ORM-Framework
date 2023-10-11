import { UserRepository } from "../repository/userRepository.js";
import { Router } from "express";

export const updateField = Router();

const userRepository = new UserRepository();

updateField.patch("/updateUserField/:user_id", async (request, response) => {

    const { user_id } = request.params;
    const { password } = request.body;

    const findUserById =  await userRepository.findUserById(user_id);

    if(findUserById == false) {
        return response.status(404).json({ message: "User Not Found !" });
    }

    if(password === "") {
        return response.status(401).json({ message: "Null Data is Not Allowed, Please fill The Password Field !" });

    }else if(typeof(password) != "string") {
        return response.status(401).json({ message: "The Field Password Must be a String !" });
    }

    const updateUserField = await userRepository.updateUserField(user_id, {
        password: password
    });

    return response.status(200).json(updateUserField);
});