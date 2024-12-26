import { useState } from 'react'

import { Container } from '@/shared/container/Container'

import s from './Auth.module.scss'

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <section className={s.auth_section}>
      <Container>
        <h1>login</h1>
      </Container>
    </section>
  )
}
