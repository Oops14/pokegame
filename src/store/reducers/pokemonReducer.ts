import { Pokemon } from '@/utils/types/apiTypes/apiTypes.ts'

const SET_POKEMON = 'pokemon/SET-POKEMON'

export type setPokemonACType = ReturnType<typeof setPokemonAC>

const pokemonInitialState = {
  pokemon: [],
}

export type pokemonInitialStateType = {
  pokemon: Pokemon[]
}

export const pokemonReducer = (
  state: pokemonInitialStateType = pokemonInitialState,
  action: PokemonActionsType
): pokemonInitialStateType => {
  switch (action.type) {
    case SET_POKEMON:
      return { ...state, pokemon: action.payload.pokemons }
    default:
      return state
  }
}

// actions
export const setPokemonAC = (pokemons: Pokemon[]) => ({ type: SET_POKEMON, payload: { pokemons } }) as const

// types
type PokemonActionsType = setPokemonACType
