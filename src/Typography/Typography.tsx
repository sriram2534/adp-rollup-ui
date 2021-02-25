import React, { forwardRef } from 'react'
import cn from 'classnames'
import styles from './Typography.module.scss'
import { TypographyProps } from './Typography.types'

export type typographyRef = HTMLElement

const Typography: React.ForwardRefRenderFunction<typographyRef, TypographyProps> = props => {
  const { variant: Type, children, color, display, hover, showUnderline, ...rest } = props

  const typographyClass = cn({
    [styles['typography']]: 1,
    [styles[`typography__color-${color}`]]: color,
    [styles[display]]: display,
    [styles[`hover-${hover}`]]: hover,
    [styles['show-underline']]: showUnderline,
  })

  return (
    <Type className={typographyClass} {...rest}>
      {children}
    </Type>
  )
}

export default forwardRef(Typography)
