import { FC, HTMLAttributes } from 'react'

import s from './Container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<ContainerProps> = ({ ...props }) => {
  return <div className={s.container}>{props.children}</div>
}
