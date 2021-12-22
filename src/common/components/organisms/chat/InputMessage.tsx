import Image from 'next/image'
import { FC } from 'react'

export const InputMessage: FC<Props> = ({ className }) => {
  return (
    <form className={`flex h-12 border-2 border-input-border rounded ${className}`}>
      <input
        type="text"
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
}
