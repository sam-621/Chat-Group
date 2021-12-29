import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

export const RedButton: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={`bg-error-bg text-error-text rounded ${className}`} {...rest}>
      {children}
    </button>
  )
}

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
