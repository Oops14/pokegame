import { FC, useEffect, useState } from 'react'

import settings_icon from '@/assets/images/pokemon/setting.svg'

import { pokemonInfo } from '@/services/api.ts'

import { useAppDispatch } from '@/store/store.ts'
import { setMoneyAC } from '@/store/reducers/pokemonReducer.ts'

import { specificCard } from '@/utils/types/apiTypes/specificCardItemType.ts'

import s from './PokemonItem.module.scss'

interface PokemonItemProps {
  title: string
}

const PokemonItem: FC<PokemonItemProps> = ({ title }) => {
  const [pokemonData, setPokemonData] = useState<specificCard>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const getSpecificPokemonInfo = async (title: string) => {
      try {
        const data = await pokemonInfo(title)

        setPokemonData(data)
      } catch (err) {
        console.log(err)
      }
    }

    getSpecificPokemonInfo(title)
  }, [title])

  useEffect(() => {
    if (!pokemonData) {
      return
    }

    const interval = setInterval(() => {
      dispatch(setMoneyAC(pokemonData.base_experience))
    }, 5000)

    return () => clearInterval(interval)
  }, [pokemonData, dispatch])

  return (
    <div className={s.pokemon_item}>
      <div className={s.pokemon_item__top_content}>
        <div className={s.top_panel}>
          <span className="name">{title}</span>
          <div className="settings">
            <img src={settings_icon} alt="settings icon" />
          </div>
        </div>
        <img src={`https://img.pokemondb.net/artwork/${title}.jpg`} alt="pokemon image" />
      </div>
      <div className={s.pokemon_item__bottom_content}>
        <div className={s.weight}>
          <span>Вес</span>
          <span>{pokemonData?.weight} кг</span>
        </div>
        <div className={s.money}>
          <span>Денег/сек</span>
          <span>{pokemonData?.base_experience}</span>
        </div>
      </div>
    </div>
  )
}

export default PokemonItem
