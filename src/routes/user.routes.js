import { createUser } from "../module/users/useCases/CreateUser.routes.js";
import { Router } from "express";

export const userRoutes = Router();

userRoutes.use(createUser);