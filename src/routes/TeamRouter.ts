import express from 'express';

import { TeamBusiness } from '../business/TeamBusiness';
import { TeamController } from '../controller/TeamController';
import { PokemonData } from '../data/PokemonData';
import { TeamData } from '../data/TeamData';
import { IdGenerator } from '../services/IdGenerator';

export const teamRouter = express.Router();

const teamBusiness = new TeamBusiness(
  new TeamData(),
  new PokemonData(),
  new IdGenerator(),
);
const teamController = new TeamController(teamBusiness);

teamRouter.post('/teams', teamController.createTeam);
teamRouter.get('/teams/:id', teamController.getTeamById);
teamRouter.get('/teams', teamController.getAllteams);
