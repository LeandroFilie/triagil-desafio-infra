import axios from 'axios';

import { Pokemon } from '../model/Pokemon';

export const getPokemonInfos = async (name: string): Promise<Pokemon> => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await axios.get(endpoint);
  return response.data;
};
