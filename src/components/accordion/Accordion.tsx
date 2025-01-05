import { FC, ReactNode, useState } from 'react'

import clsx from 'clsx'

import arrow_down from '@/assets/images/arrows/arrow_down.svg'
import arrow_top from '@/assets/images/arrows/arrow_top.svg'

import PokemonItem from '@/components/pokemonItem/PokemonItem.tsx'

import { Pokemon } from '@/utils/types/apiTypes/apiTypes.ts'

import Typography from '@/ui/typography/Typography'

import s from './Accordion.module.scss'

interface AccordionProps {
  children: ReactNode
  id: number
  pokemons: Pokemon[]
}

export const Accordion: FC<AccordionProps> = ({ children, id, pokemons }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={s.accordion} onClick={handleOpen}>
      <div className={s.accordion__top_content}>
        <Typography tag="h4">{children}</Typography>
        <div className={s.accordion__arrow}>
          {isOpen ? <img src={arrow_top} alt="arrow top" /> : <img src={arrow_down} alt="arrow down" />}
        </div>
      </div>
      <div className={clsx(s.accordion__bottom_content, { [s.opened]: isOpen })}>
        <div className={clsx(s.grid_pokemons, { [s.show_grid]: isOpen })}>
          {id === 1 &&
            pokemons.map((i, indx) => {
              return <PokemonItem key={indx} title={i.name} />
            })}
        </div>
      </div>
    </div>
  )
}
