import React, { forwardRef } from 'react'
import cn from 'classnames'
import { ButtonProps } from './Button.types'
import './Button.scss'

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
    btn: 1,
    'is-rounded': isRounded,
    [`btn__btn--${color}`]: color,
    disabled: disabled,
    [`${size}`]: size,
    'is-full-width': isFullWidth,
    [`display-${display}`]: display,
    className: className,
  })

  console.log(btnClass)

  return (
    <button ref={ref} className={btnClass} onClick={onClickHandler} {...rest}>
      {!!startIcon && <span className={'btn__start-icon'}>{startIcon}</span>}
      {!!children && <span>{children}</span>}
      {!!endIcon && <span className={'btn__end-icon'}>{endIcon}</span>}
    </button>
  )
}

export default forwardRef(ButtonComponent)
