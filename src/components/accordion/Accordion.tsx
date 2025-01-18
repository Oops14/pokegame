import { FC, ReactNode, useState } from 'react'

import clsx from 'clsx'

import arrow_down from '@/assets/images/arrows/arrow_down.svg'
import arrow_top from '@/assets/images/arrows/arrow_top.svg'

import PokemonItem from '@/components/pokemonItem/PokemonItem.tsx'

import { Pokemon } from '@/utils/types/apiTypes/apiTypes.ts'
import { ACCORDION } from '@/utils/enums/accordionEnum/accordionEnum'

import Typography from '@/ui/typography/Typography'

import s from './Accordion.module.scss'

interface AccordionProps {
  children: ReactNode
  id: number
  pokemons: Pokemon[]
}

export const Accordion: FC<AccordionProps> = ({ children, id, pokemons }) => {
  const [isOpen, setIsOpen] = useState(false)

  const rows = 7
  const cols = 7

  const [grid, setGrid] = useState(
    Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false))
  )

  console.log(grid)

  // Handle growing barberries in a cell
  const growBarberry = (row: number, col: number) => {
    // Clone grid state
    const newGrid = grid.map((r) => [...r])

    // Mark the cell as containing a barberry
    newGrid[row][col] = true
    setGrid(newGrid)
  }

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
          {id === ACCORDION.MY_POKEMONS &&
            pokemons.map((i, indx) => {
              return <PokemonItem key={indx} title={i.name} />
            })}

          {id === ACCORDION.GARDEN && (
            <div className={s.grid_main_garden}>
              <div className={s.grid_garden}>
                {grid.map((row, rowIndex) =>
                  row.map((cell, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`cell ${cell ? 'barberry' : ''}`}
                      onClick={() => growBarberry(rowIndex, colIndex)}>
                      {cell && <div className="barberry-icon"></div>}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
