import { FC } from 'react'

import coin from '@/assets/images/coins/coin.svg'

import Typography from '@/ui/typography/Typography'

import s from './CoinAmount.module.scss'

interface CoinAmountProps {
  amount: number
}

const CoinAmount: FC<CoinAmountProps> = ({ amount }) => {
  return (
    <div className={s.amount}>
      <img src={coin} alt="coins" />
      <Typography tag="h4">{amount}</Typography>
    </div>
  )
}

export default CoinAmount
