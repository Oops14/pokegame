import { FC, ReactNode, useState } from 'react'

import arrow_down from '@/assets/images/arrows/arrow_down.svg'
import arrow_top from '@/assets/images/arrows/arrow_top.svg'

import Typography from '@/ui/typography/Typography'

import s from './Accordion.module.scss'
import clsx from 'clsx'

interface AccordionProps {
  children: ReactNode
}

export const Accordion: FC<AccordionProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={s.accordion} onClick={handleOpen}>
      <div className={s.accordion__top_content}>
        <Typography tag="h4">{children}</Typography>
        <div className={s.accordion__arrow}>
          {isOpen ? <img src={arrow_top} alt="arrow top" /> : <img src={arrow_down} alt="arrow down" />}
        </div>
      </div>
      <div className={clsx(s.accordion__bottom_content, { [s.opened]: isOpen })}></div>
    </div>
  )
}
