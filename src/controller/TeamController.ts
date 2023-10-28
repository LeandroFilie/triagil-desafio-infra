import { Request, Response } from 'express';

import { TeamBusiness } from '../business/TeamBusiness';

export class TeamController {
  constructor(private teamBusiness: TeamBusiness) {}

  createTeam = async (req: Request, res: Response): Promise<void> => {
    try {
      const { user } = req.body;
      const { team } = req.body;
      const result = await this.teamBusiness.createTeam(user, team);
      res.status(201).send({ message: 'Team created successfully', result });
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
  };

  getAllteams = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.teamBusiness.getAllTeams();
      res.status(200).send({ result });
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
  };

  getTeamById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await this.teamBusiness.getTeamById(id);
      res.status(200).send({ result });
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
  };
}
