import { ChangeEvent, useRef, useState } from 'react'

export const useUploadImage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState('')

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()

    const inputElement = inputRef.current as HTMLInputElement

    if (!inputElement.files?.length) return

    const image = inputElement.files[0]

    const imageUrl = URL.createObjectURL(image)
    setPreviewUrl(imageUrl)
  }

  return {
    handleImage,
    inputRef,
    previewUrl
  }
}
