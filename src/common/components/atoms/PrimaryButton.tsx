import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

export const PrimaryButton: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={`bg-primary text-white rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  onClick: () => void
}
