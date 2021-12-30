import { ChangeEvent, useRef } from 'react'

export const useUploadImage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()

    const inputElement = inputRef.current as HTMLInputElement

    if (!inputElement.files?.length) return

    const image = inputElement.files[0]
    console.log(image)
  }

  return {
    handleImage,
    inputRef
  }
}
