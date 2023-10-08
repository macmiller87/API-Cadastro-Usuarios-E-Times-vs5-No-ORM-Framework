import { UserRepository } from "../repository/userRepository.js";
import { Router } from "express";

export const createUser = Router();

const userRepository = new UserRepository();

createUser.post("/createUser", async (request, response) => {

    const { username, email, password } = request.body;

    const findUserByUserName = await userRepository.findUserByUserName(username);
    const findUserByEmail = await userRepository.findUserByEmail(email);

    if(username === "" || email === "" || password === "") {
        return response.status(401).json({ message: "Null Data is Not Allowed, Please fill in All Datas !" });

    }else if(typeof(username) != "string" || typeof(email) != "string" || typeof(password) != "string") {
        return response.status(401).json({ message: "The field's, must be a string !" });

    }else {

        let regexMail = /^\S+@\S+\.\S+$/;

        if(findUserByUserName == true) {
            return response.status(401).json({ message: "User already exists !" });

        }else if(findUserByEmail == true) {
            return response.status(401).json({ message: "Email already in use !" });

        }else if(!regexMail.test(email)) {
            return response.status(401).json({ message: "Please Put a Valid Email !" });
        }

        const createUser = await userRepository.createUser({
            username: username,
            email: email,
            password: password
        })

        return response.status(201).json(createUser);
    }

});