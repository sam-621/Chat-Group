import { DEFAULT_USER_IMAGE } from '@helpers/images'
import { useUser } from '@hooks/fetch/useUser'
import Image from 'next/image'
import { ChangeEvent, FC, RefObject } from 'react'

export const ImageInput: FC<Props> = ({ handleImage, inputRef, previewUrl }) => {
  const { data } = useUser()
  return (
    <div className="rounded-full flex justify-center items-center ">
      <div className="mr-1">
        <Image
          src={data?.profilePic || previewUrl || DEFAULT_USER_IMAGE}
          width={120}
          height={120}
          alt="profile"
          className="object-cover rounded-full"
        />
      </div>
      <div className=" flex justify-center w-full">
        <input
          ref={inputRef}
          type="file"
          className="opacity-0 absolute h-10 cursor-pointer"
          onChange={handleImage}
          accept="image/*"
        />
        <button className="w-full bg-blue-500 rounded text-white p-2 cursor-pointer">upload</button>
      </div>
    </div>
  )
}

type Props = {
  handleImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
  inputRef: RefObject<HTMLInputElement>
  previewUrl: string
}
