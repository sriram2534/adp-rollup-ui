export type ButtonProps = {
  onClickHandler?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  children: React.ReactNode
  color?: string
  isRounded?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isFullWidth?: boolean
  disabled?: boolean
  display?: 'block' | 'inline'
} & React.HTMLAttributes<HTMLButtonElement>
