import React, { FC, CSSProperties } from 'react'
import clsx from 'clsx'
import s from './Typography.module.scss'

interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
  baseStyles?: boolean
}

const Typography: FC<TypographyProps> = ({ tag: Tag = 'p', className, children, baseStyles, ...props }) => {
  const baseStyle: CSSProperties = {
    color: '#333',
    textShadow: 'none',
  }

  return (
    <Tag className={clsx(s.typography, className)} style={baseStyles ? baseStyle : undefined} {...props}>
      {children}
    </Tag>
  )
}

export default Typography
