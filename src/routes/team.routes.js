import { createTeams } from "../module/teams/useCases/CreateTeams.routes.js";
import { getTeam } from "../module/teams/useCases/GetTeam.routes.js";
import { deleteTeam } from "../module/teams/useCases/DeleteTeam.routes.js";
import { Router } from "express";

export const teamRoutes = Router();

teamRoutes.use(createTeams);
teamRoutes.use(getTeam);
teamRoutes.use(deleteTeam);