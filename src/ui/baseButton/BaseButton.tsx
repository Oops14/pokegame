import { ButtonHTMLAttributes, FC } from 'react'

import clsx from 'clsx'

import s from './BaseButton.module.scss'

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BaseButton: FC<BaseButtonProps> = ({ ...props }) => {
  return (
    <button {...props} className={clsx(s.btn, props.className)}>
      {props.children}
    </button>
  )
}
