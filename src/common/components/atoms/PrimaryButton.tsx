import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

export const PrimaryButton: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={`bg-primary text-white rounded ${className}`} {...rest}>
      {children}
    </button>
  )
}

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
