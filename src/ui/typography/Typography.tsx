import { CSSProperties, FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import s from './Typography.module.scss'

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  tag?: TagVariants
  baseStyles?: boolean
}

const Typography: FC<TypographyProps> = ({ tag: Tag = 'p', className, children, ...props }) => {
  const baseStyle: CSSProperties = {
    color: '#333',
    textShadow: 'none',
  }

  return (
    <Tag className={clsx(s.typography, className)} style={props.baseStyles ? baseStyle : undefined} {...props}>
      {children}
    </Tag>
  )
}

export default Typography
