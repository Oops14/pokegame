import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import AuthForm from '@/modules/authForm/AuthForm.tsx'

import logo1 from '@/assets/images/poke_1.svg'
import logo2 from '@/assets/images/poke_2.svg'

import { Container } from '@/shared/container/Container'

import { AppRootStateType } from '@/store/store'

import s from './Auth.module.scss'

export const Auth = () => {
  const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (isInitialized) {
      navigate('/')
    }
  }, [isInitialized, navigate])

  return (
    <section className={s.auth_section}>
      <Container className={s.container_center}>
        <div className={s.auth_section__logos}>
          <div className={s.auth_section__logos__item}>
            <img src={logo1} alt="logo1" />
          </div>
          <div className={s.auth_section__logos__item}>
            <img src={logo2} alt="logo2" />
          </div>
        </div>
        <AuthForm />
      </Container>
    </section>
  )
}
