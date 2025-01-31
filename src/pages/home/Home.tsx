import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import clsx from 'clsx'

import { accordions, gardenOptions } from '@/pages/home/data.ts'

import PokemonItem from '@/modules/pokemon/pokemonItem/PokemonItem.tsx'

import BerryGrid from '@/components/berryGrid/BerryGrid'

import { Header } from '@/layout/header/Header'

import arrow_top from '@/assets/images/arrows/arrow_top.svg'
import arrow_down from '@/assets/images/arrows/arrow_down.svg'

import { Container } from '@/shared/container/Container'
import CoinAmount from '@/shared/coinAmount/CoinAmount'

import { AppRootStateType, useAppDispatch } from '@/store/store'
import { setMoneyAC, setPokemonTC } from '@/store/reducers/pokemonReducer.ts'

import { Pokemon } from '@/utils/types/apiTypes/apiTypes.ts'
import { ACCORDION } from '@/utils/enums/accordionEnum/accordionEnum.ts'

import Typography from '@/ui/typography/Typography'
import { BaseButton } from '@/ui/baseButton/BaseButton'

import s from './Home.module.scss'

export const Home = () => {
  const [rows] = useState(7)
  const [cols] = useState(7)
  const [activeArea, setActiveArea] = useState({ rows: 5, cols: 5 })

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

  const handleGardenOptionPurchase = (optionId: string, price: number) => {
    if (moneyAmount < price) {
      alert('Not enough money!')
      return
    }

    if (activeArea.cols === cols || activeArea.rows === rows) {
      alert('The Garden is fully opened!')
      return
    }

    // Handle different garden options
    switch (optionId) {
      case gardenOptions[0].id:
        if (activeArea.rows <= rows && activeArea.rows <= cols) {
          setActiveArea({ rows: ++activeArea.rows, cols: ++activeArea.cols })
        }
        break
    }

    dispatch(setMoneyAC(-price))
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
                      <div>
                        {i.id === ACCORDION.MY_POKEMONS && (
                          <div className={clsx(s.grid_pokemons, { [s.show_grid]: openAccordions[index] })}>
                            {pokemons.map((i, indx) => {
                              return <PokemonItem key={indx} title={i.name} />
                            })}
                          </div>
                        )}

                        {i.id === ACCORDION.GARDEN && (
                          <div className={clsx(s.grid_main_garden, { [s.show_grid]: openAccordions[index] })}>
                            <div className={s.grid_garden}>
                              <BerryGrid
                                rows={rows}
                                cols={cols}
                                activeArea={activeArea}
                                berryCells={[
                                  { row: 1, col: 2 },
                                  { row: 3, col: 4 },
                                ]}
                              />
                            </div>
                            <div className={s.grid_main_garden__options}>
                              {gardenOptions.map((i) => {
                                return (
                                  <div key={i.id} className={s.grid_main_garden__options__item}>
                                    <div className={s.grid_main_garden__options__item__top}>
                                      <Typography baseStyles={true}>{i.title}</Typography>
                                    </div>

                                    <div className={s.grid_main_garden__options__item__bottom}>
                                      <BaseButton onClick={() => handleGardenOptionPurchase(i.id, i.price)}>
                                        Купить
                                      </BaseButton>
                                      <CoinAmount amount={i.price} />
                                    </div>
                                  </div>
                                )
                              })}
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
