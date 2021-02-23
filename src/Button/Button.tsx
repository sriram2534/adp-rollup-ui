import React, { forwardRef } from 'react'
import cn from 'classnames'
import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

export type BtnRef = HTMLButtonElement

const ButtonComponent: React.ForwardRefRenderFunction<BtnRef, ButtonProps> = (props, ref) => {
  const {
    onClickHandler,
    children,
    startIcon,
    endIcon,
    color,
    isRounded,
    className,
    disabled,
    size,
    isFullWidth,
    display,
    ...rest
  } = props

  const btnClass = cn({
    [styles['btn']]: 1,
    [styles['is-rounded']]: isRounded,
    [styles[`btn__btn--${color}`]]: color,
    [styles['disabled']]: disabled,
    [styles[`${size}`]]: size,
    [styles['is-full-width']]: isFullWidth,
    [styles[`display-${display}`]]: display,
    className: className,
  })

  return (
    <button ref={ref} className={btnClass} onClick={onClickHandler} {...rest}>
      {!!startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      {!!children && <span>{children}</span>}
      {!!endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </button>
  )
}

export default forwardRef(ButtonComponent)
