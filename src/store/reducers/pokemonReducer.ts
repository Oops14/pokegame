import { Dispatch } from 'react'

import { fetchPokemons } from '@/services/api.ts'

import { Pokemon } from '@/utils/types/apiTypes/apiTypes.ts'

const SET_POKEMON = 'pokemon/SET-POKEMON'
const SET_MONEY = 'pokemon/SET-MONEY'

export type setPokemonACType = ReturnType<typeof setPokemonAC>
export type setMoneyACType = ReturnType<typeof setMoneyAC>

const pokemonInitialState = {
  pokemon: [],
  money: 4000,
}

export type pokemonInitialStateType = {
  pokemon: Pokemon[]
  money: number
}

export const pokemonReducer = (
  state: pokemonInitialStateType = pokemonInitialState,
  action: PokemonActionsType
): pokemonInitialStateType => {
  switch (action.type) {
    case SET_POKEMON:
      return { ...state, pokemon: action.payload.pokemons }
    case SET_MONEY:
      return { ...state, money: state.money + action.payload.amount }
    default:
      return state
  }
}

// actions
export const setPokemonAC = (pokemons: Pokemon[]) => ({ type: SET_POKEMON, payload: { pokemons } }) as const
export const setMoneyAC = (amount: number) => ({ type: SET_MONEY, payload: { amount } }) as const

// thunks.
export const setPokemonTC = (count: number) => async (dispatch: Dispatch<any>) => {
  try {
    const res = await fetchPokemons(count)
    dispatch(setPokemonAC(res.results))
  } catch (e) {
    console.error('Error fetching Pokémon:', e)
  }
}

// types
type PokemonActionsType = setPokemonACType | setMoneyACType
