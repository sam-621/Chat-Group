import { THashMap, TInputType } from '@interfaces/utils.interface'
import { ChangeEvent, FC } from 'react'

const OPTIONAL_PLACEHOLDERS: THashMap<string> = {
  ['text']: 'Username',
  ['password']: 'Password',
  ['email']: 'Email'
}

export const Input: FC<Props> = ({
  type,
  onChange,
  value,
  errorMessage,
  placeholder,
  className
}) => {
  const placeHolderText = placeholder || OPTIONAL_PLACEHOLDERS[type]
  const hasError = !!errorMessage
  const defaultBorder = hasError ? 'border-red-500' : 'border-input'
  const hoverFocusHover = !hasError && 'hover:border-primary focus:border-primary'

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor="">{placeHolderText}</label>
      <input
        type={type}
        required
        onChange={onChange}
        value={value}
        className={`${defaultBorder} ${hoverFocusHover} bg-transparent border  outline-none text-white p-2 transition duration-150 rounded-md max-h-12 max-w-sm`}
        placeholder={placeHolderText || ''}
        autoComplete={type !== 'password' ? 'on' : 'off'}
      />
      {hasError && (
        <span role="alert" className="transition duration-200 text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

type Props = {
  type: TInputType
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  errorMessage: string
  placeholder?: string
  className?: string
}
