import logo1 from '@/assets/images/poke_1.svg'
import logo2 from '@/assets/images/poke_2.svg'
import coin from '@/assets/images/coins/coin.svg'

import { Container } from '@/shared/container/Container'

import s from './Header.module.scss'

export const Header = () => {
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
          <div className={s.header_main__inner__coins}>
            <img src={coin} alt="coins" />
            <span className={s.coins_amount}>100 000 000</span>
          </div>
        </div>
      </Container>
    </div>
  )
}
