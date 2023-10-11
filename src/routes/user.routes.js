import { createUser } from "../module/users/useCases/CreateUser.routes.js";
import { getUser } from "../module/users/useCases/GetUser.routes.js";
import { updateField } from "../module/users/useCases/updateUserFiled.routes.js";
import { Router } from "express";

export const userRoutes = Router();

userRoutes.use(createUser);
userRoutes.use(getUser);
userRoutes.use(updateField);