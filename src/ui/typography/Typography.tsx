import { FC, HTMLAttributes } from 'react'

import clsx from 'clsx'

import s from './Typography.module.scss'

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface Typography extends HTMLAttributes<HTMLElement> {
  tag?: TagVariants
}

const Typography: FC<Typography> = ({ tag: Tag = 'p', ...props }) => (
  <Tag className={clsx(s.typography, props.className)} {...props}>
    {props.children}
  </Tag>
)

export default Typography
