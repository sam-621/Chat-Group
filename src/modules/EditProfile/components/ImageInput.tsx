import { DEFAULT_USER_IMAGE } from '@helpers/images'
import Image from 'next/image'
import { useUploadImage } from '../hook/useUploadImage'

export const ImageInput = () => {
  const { handleImage, inputRef } = useUploadImage()
  return (
    <div className="rounded-full flex justify-center items-center ">
      <Image src={DEFAULT_USER_IMAGE} width={120} height={120} alt="profile" />
      <div className=" flex justify-center w-full">
        <input
          ref={inputRef}
          type="file"
          className="opacity-0 absolute h-10 cursor-pointer"
          onChange={handleImage}
        />
        <button className="w-full bg-blue-500 rounded text-white p-2 cursor-pointer">upload</button>
      </div>
    </div>
  )
}
