import { Pokemon } from '../model/Pokemon';

export type TeamOutput = {
  id: string;
  owner: string;
  pokemons: Pokemon[];
};
