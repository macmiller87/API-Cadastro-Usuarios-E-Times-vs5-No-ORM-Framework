import { createTeams } from "../module/teams/useCases/CreateTeams.routes.js";
import { getTeam } from "../module/teams/useCases/GetTeam.routes.js";
import { Router } from "express";

export const teamRoutes = Router();

teamRoutes.use(createTeams);
teamRoutes.use(getTeam);