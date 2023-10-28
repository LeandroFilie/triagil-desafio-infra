import { PokemonData } from '../data/PokemonData';
import { TeamData } from '../data/TeamData';
import { IdGenerator } from '../services/IdGenerator';
import { getPokemonInfos } from '../services/PokemonManager';
import { TeamOutput } from '../types/TeamOutput';

export class TeamBusiness {
  constructor(
    private teamData: TeamData,
    private pokemonData: PokemonData,
    private idGenerator: IdGenerator,
  ) {}

  createTeam = async (user: string, team: string[]): Promise<string> => {
    try {
      if (!user || team.length < 1) {
        throw new Error('Missing input');
      }

      const idTeam = this.idGenerator.generate();
      await this.teamData.createTeam(idTeam, user);

      team.forEach(async (pokemon) => {
        let pokemonInfos = await this.pokemonData.getPokemonByName(pokemon);
        if (!pokemonInfos) {
          pokemonInfos = await getPokemonInfos(pokemon);
          await this.pokemonData.createPokemon(
            String(pokemonInfos.id),
            pokemonInfos.name,
            pokemonInfos.height,
            pokemonInfos.weight,
          );
        }
        const idTeamPokemon = this.idGenerator.generate();

        await this.pokemonData.createTeamPokemon(
          idTeamPokemon,
          idTeam,
          pokemonInfos.id,
        );
      });
      return idTeam;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getAllTeams = async (): Promise<TeamOutput> => {
    try {
      const teams = await this.teamData.getAllTeams();
      const teamsFormatted: TeamOutput = {};

      teams.forEach((team) => {
        const { owner, id, name, weight, height } = team;

        if (!teamsFormatted[owner]) {
          teamsFormatted[owner] = {
            owner,
            pokemons: [],
          };
        }

        teamsFormatted[owner].pokemons.push({
          id,
          name,
          weight,
          height,
        });
      });

      const result: TeamOutput = {};
      let index = 1;

      for (const owner in teamsFormatted) {
        result[index] = teamsFormatted[owner];
        index++;
      }

      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getTeamById = async (teamID: string) => {
    try {
      const teams = await this.teamData.getTeamById(teamID);

      const team = {
        owner: teams[0].owner,
        pokemons: teams.map((pokemon) => ({
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
        })),
      };

      return team;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
