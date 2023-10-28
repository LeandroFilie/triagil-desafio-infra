import { Pokemon } from '../model/Pokemon';

export type TeamOutput = {
  [key: number]: {
    owner: string;
    pokemons: Pokemon[];
  };
};
