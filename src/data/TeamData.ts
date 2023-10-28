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

  getAllTeams = async (): Promise<any[]> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx(this.TABLE_NAME)
        .select(
          'team.owner',
          'pokemon.id',
          'pokemon.name',
          'pokemon.height',
          'pokemon.weight',
        )
        .innerJoin('team_pokemon', 'team_pokemon.id_team', '=', 'team.id')
        .innerJoin('pokemon', 'pokemon.id', '=', 'team_pokemon.id_pokemon');
      await trx.commit();
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getTeamById = async (teamID: string): Promise<any[]> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx(this.TABLE_NAME)
        .select(
          'team.owner',
          'pokemon.id',
          'pokemon.name',
          'pokemon.height',
          'pokemon.weight',
        )
        .innerJoin('team_pokemon', 'team_pokemon.id_team', '=', 'team.id')
        .innerJoin('pokemon', 'pokemon.id', '=', 'team_pokemon.id_pokemon')
        .where({ 'team.id': teamID });
      await trx.commit();
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
