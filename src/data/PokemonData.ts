import { BaseDatabase } from './BaseData';

export class PokemonData extends BaseDatabase {
  protected TABLE_NAME = 'pokemon';

  createPokemon = async (
    id: string,
    name: string,
    height: number,
    weight: number,
  ): Promise<void> => {
    try {
      const trx = await this.connection.transaction();
      await trx(this.TABLE_NAME).insert({
        id,
        name,
        height,
        weight,
      });
      await trx.commit();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getPokemonByName = async (name: string): Promise<any> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx(this.TABLE_NAME).select().where({ name });
      return result[0];
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  createTeamPokemon = async (
    id: string,
    teamID: string,
    pokemonID: string,
  ): Promise<void> => {
    try {
      const trx = await this.connection.transaction();
      await trx('team_pokemon').insert({
        id,
        id_team: teamID,
        id_pokemon: pokemonID,
      });
      await trx.commit();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
