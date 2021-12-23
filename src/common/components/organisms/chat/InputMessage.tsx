import { TInputType } from '@interfaces/utils.interface'
import Image from 'next/image'
import { ChangeEvent, FC, FormEvent } from 'react'

export const InputMessage: FC<Props> = ({ className, value, type, onChange, onSubmit }) => {
  return (
    <form
      className={`flex h-12 border-2 border-input-border rounded ${className}`}
      onSubmit={onSubmit}
    >
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder="Type a message"
        className=" pl-5 w-full outline-none text-text-black"
      />
      <button type="submit" className="flex items-center mr-2">
        <Image src="/icons/send.svg" alt="Send" width="34px" height="34px" />
      </button>
    </form>
  )
}

type Props = {
  className?: string
  value: string
  type: TInputType
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
