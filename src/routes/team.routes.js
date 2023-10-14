import { createTeams } from "../module/teams/useCases/CreateTeams.routes.js";
import { Router } from "express";

export const teamRoutes = Router();

teamRoutes.use(createTeams);