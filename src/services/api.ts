import axios from 'axios'

import { PokemonResponse } from '@/utils/types/apiTypes/apiTypes.ts'
import { specificCard } from '@/utils/types/apiTypes/specificCardItemType.ts'

const API_BASE_URL = 'https://pokeapi.co/api/v2'

export const fetchPokemons = async (limit: number = 20, offset: number = 0) => {
  const res = await axios.get<PokemonResponse>(`${API_BASE_URL}/pokemon`, {
    params: { limit, offset },
  })

  return res.data
}

export const pokemonInfo = async (title: string) => {
  const res = await axios.get<specificCard>(`${API_BASE_URL}/pokemon/${title}`)

  return res.data
}
