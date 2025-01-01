import AuthForm from '@/modules/authForm/AuthForm.tsx'

import logo1 from '@/assets/images/poke_1.svg'
import logo2 from '@/assets/images/poke_2.svg'

import { Container } from '@/shared/container/Container'

import s from './Auth.module.scss'

export const Auth = () => {
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
