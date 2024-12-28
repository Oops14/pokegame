import { FC, HTMLAttributes } from 'react'

import clsx from 'clsx'

import s from './Container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<ContainerProps> = ({ ...props }) => {
  return <div className={clsx(s.container, props.className)}>{props.children}</div>
}
