import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { Header } from '@/layout/header/Header'

import { AppRootStateType } from '@/store/store'

import s from './Home.module.scss'

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
        <h1>Home</h1>
      </section>
    </>
  )
}
