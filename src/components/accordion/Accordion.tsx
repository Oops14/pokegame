import { FC, ReactNode } from 'react'

import arrow_down from '@/assets/images/arrows/arrow_down.svg'

import s from './Accordion.module.scss'
import Typography from '@/ui/typography/Typography'

interface AccordionProps {
  children: ReactNode
}

export const Accordion: FC<AccordionProps> = ({ children }) => {
  return (
    <div className={s.accordion}>
      <Typography tag="h4">{children}</Typography>
      <div className={s.accordion__arrow}>
        <img src={arrow_down} alt="arrow down" />
      </div>
    </div>
  )
}
