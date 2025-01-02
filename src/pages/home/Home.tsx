import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { Header } from '@/layout/header/Header'

import { Container } from '@/shared/container/Container'

import { AppRootStateType } from '@/store/store'

import Typography from '@/ui/typography/Typography'

import s from './Home.module.scss'
import { Accordion } from '@/components/accordion/Accordion'

export const Home = () => {
  const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isInitialized) {
      navigate('/auth')
    }
  }, [isInitialized])

  return (
    <>
      <Header />
      <section className={s.main_home}>
        <Container>
          <div className={s.grid_main}>
            <div className={s.left_sidebar}>
              <Typography tag="h4">Inventory</Typography>
            </div>
            <main className={s.main_content}>
              <Accordion>My Pokemons</Accordion>
              <Accordion>Garden</Accordion>
              <Accordion>Hunt</Accordion>
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
