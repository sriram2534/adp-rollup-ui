export type TypographyProps = {
  variant: 'p' | 'h1'
  children: React.ReactNode
  color: 'default' | 'primary' | 'warning' | 'danger'
  className: string
  display: 'inline' | 'block'
  hover: 'pointer' | 'not-allowed'
  showUnderline: boolean
} & React.HTMLAttributes<HTMLElement>
