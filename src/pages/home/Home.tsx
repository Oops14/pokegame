import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import clsx from 'clsx'

import { accordions } from '@/pages/home/data.ts'

import PokemonItem from '@/modules/pokemon/pokemonItem/PokemonItem.tsx'

import BerryGrid from '@/components/berryGrid/BerryGrid'

import { Header } from '@/layout/header/Header'

import arrow_top from '@/assets/images/arrows/arrow_top.svg'
import arrow_down from '@/assets/images/arrows/arrow_down.svg'

import { Container } from '@/shared/container/Container'

import { AppRootStateType, useAppDispatch } from '@/store/store'
import { setPokemonTC } from '@/store/reducers/pokemonReducer.ts'

import { Pokemon } from '@/utils/types/apiTypes/apiTypes.ts'
import { ACCORDION } from '@/utils/enums/accordionEnum/accordionEnum.ts'

import Typography from '@/ui/typography/Typography'

import s from './Home.module.scss'

export const Home = () => {
  const [rows, setRows] = useState(7)
  const [cols, setCols] = useState(7)

  const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)
  const pokemons = useSelector<AppRootStateType, Pokemon[]>((state) => state.pokemon.pokemon)
  const moneyAmount = useSelector<AppRootStateType, number>((state) => state.pokemon.money)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [openAccordions, setOpenAccordions] = useState<boolean[]>(Array(accordions.length).fill(false))

  const handleOpen = (index: number) => {
    setOpenAccordions((prev) => {
      const newOpenAccordions = [...prev]
      newOpenAccordions[index] = !newOpenAccordions[index]

      return newOpenAccordions
    })
  }

  useEffect(() => {
    if (!isInitialized) {
      navigate('/auth')
    }
  }, [isInitialized, navigate])

  useEffect(() => {
    dispatch(setPokemonTC(2))
  }, [dispatch])

  return (
    <>
      <Header amount={moneyAmount} />
      <section className={s.main_home}>
        <Container>
          <div className={s.grid_main}>
            <div className={s.left_sidebar}>
              <Typography tag="h4">Inventory</Typography>
            </div>
            <main className={s.main_content}>
              {accordions.map((i, index) => {
                return (
                  <div key={i.id} className={s.accordion}>
                    <div className={s.accordion__top_content} onClick={() => handleOpen(index)}>
                      <Typography tag="h4">{i.title}</Typography>
                      <div className={s.accordion__arrow}>
                        {openAccordions[index] ? (
                          <img src={arrow_top} alt="arrow top" />
                        ) : (
                          <img src={arrow_down} alt="arrow down" />
                        )}
                      </div>
                    </div>
                    <div className={clsx(s.accordion__bottom_content, { [s.opened]: openAccordions[index] })}>
                      <div className={clsx(s.grid_pokemons, { [s.show_grid]: openAccordions[index] })}>
                        {i.id === ACCORDION.MY_POKEMONS &&
                          pokemons.map((i, indx) => {
                            return <PokemonItem key={indx} title={i.name} />
                          })}

                        {i.id === ACCORDION.GARDEN && (
                          <div className={s.grid_main_garden}>
                            <div className={s.grid_garden}>
                              <BerryGrid
                                rows={rows}
                                cols={cols}
                                berryCells={[
                                  { row: 1, col: 2 },
                                  { row: 3, col: 4 },
                                ]}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </main>
            <div className={s.right_sidebar}>
              <Typography tag="h4">Shop</Typography>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
