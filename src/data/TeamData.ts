import { TeamOutput } from '../types/TeamOutput';

import { BaseDatabase } from './BaseData';

export class TeamData extends BaseDatabase {
  protected TABLE_NAME = 'team';

  createTeam = async (id: string, owner: string): Promise<void> => {
    try {
      const trx = await this.connection.transaction();
      await trx(this.TABLE_NAME).insert({
        id,
        owner,
      });
      await trx.commit();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getAllTeams = async (): Promise<TeamOutput[]> => {
    try {
      return [];
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getTeamById = async (teamID: string): Promise<TeamOutput[]> => {
    try {
      return [];
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
