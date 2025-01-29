import { FC } from 'react'

import logo1 from '@/assets/images/poke_1.svg'
import logo2 from '@/assets/images/poke_2.svg'

import { Container } from '@/shared/container/Container'
import CoinAmount from '@/shared/coinAmount/CoinAmount'

import s from './Header.module.scss'

interface HeaderProps {
  amount: number
}

export const Header: FC<HeaderProps> = ({ amount }) => {
  return (
    <div className={s.header_main}>
      <Container>
        <div className={s.header_main__inner}>
          <div className={s.header_main__inner__logos}>
            <div className={s.header_main__inner__logos__item}>
              <img src={logo1} alt="logo1" />
            </div>
            <div className={s.header_main__inner__logos__item}>
              <img src={logo2} alt="logo2" />
            </div>
          </div>
          <CoinAmount amount={amount} />
        </div>
      </Container>
    </div>
  )
}
