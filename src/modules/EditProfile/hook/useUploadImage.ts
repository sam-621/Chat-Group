import { getFilenameExtension, getInputImage, isInvalidImage } from '@helpers/images'
import { showErrorMessage } from '@libs/toast.lib'
import { ChangeEvent, useRef, useState } from 'react'

export const useUploadImage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState('')

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    const image = getInputImage(inputRef.current)

    if (!image) {
      showErrorMessage('Something went wrong, reload the page')
      return
    }

    const imageExtension = getFilenameExtension(image.name)

    if (isInvalidImage(imageExtension)) {
      showErrorMessage('Only images are acceptable')
      return
    }

    const imageUrl = URL.createObjectURL(image)
    setPreviewUrl(imageUrl)

    const formData = new FormData()
    formData.append('file', image)
  }

  return {
    handleImage,
    inputRef,
    previewUrl
  }
}
