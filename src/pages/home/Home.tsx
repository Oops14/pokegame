import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { accordions } from '@/pages/home/data.ts'

import { Accordion } from '@/components/accordion/Accordion'

import { Header } from '@/layout/header/Header'

import { fetchPokemons } from '@/services/api.ts'

import { Container } from '@/shared/container/Container'

import { AppRootStateType, useAppDispatch } from '@/store/store'
import { setPokemonAC } from '@/store/reducers/pokemonReducer.ts'

import { Pokemon } from '@/utils/types/apiTypes/apiTypes.ts'

import Typography from '@/ui/typography/Typography'

import s from './Home.module.scss'

export const Home = () => {
  const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)
  const pokemons = useSelector<AppRootStateType, Pokemon[]>((state) => state.pokemon.pokemon)
  const moneyAmount = useSelector<AppRootStateType, number>((state) => state.pokemon.money)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isInitialized) {
      navigate('/auth')
    }
  }, [isInitialized, navigate])

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const data = await fetchPokemons(2)

        dispatch(setPokemonAC(data.results))
      } catch (err) {
        console.log(err)
      }
    }

    getPokemons()
  }, [])

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
              {accordions.map((i) => {
                return (
                  <Accordion key={i.id} id={i.id} pokemons={pokemons}>
                    {i.title}
                  </Accordion>
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
