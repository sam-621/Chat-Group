import { uploadImage } from '@apis/image.api'
import { updateUserProfile } from '@apis/user.api'
import { useUser } from '@hooks/fetch/useUser'
import { useForm } from '@hooks/useForm'
import { TUseInput } from '@hooks/useInput'
import { TEditProfileDto } from '@interfaces/services/user.interface'
import { THandleSubmit } from '@interfaces/utils.interface'
import { showSuccessMessage } from '@libs/toast.lib'
import { useState } from 'react'

export const useEditProfileForm = (
  username: TUseInput,
  email: TUseInput,
  imageData: FormData | null
) => {
  const { data } = useUser()
  const [isLoading, setIsLoading] = useState(false)
  const { isValidFormData } = useForm({ username, email })
  const { mutateUser } = useUser()

  const uploadImageToCloudinary = async (): Promise<string> => {
    if (!imageData) return ''

    const imageUploaded = await uploadImage(imageData)

    return imageUploaded?.secure_url
  }

  const handleSubmit: THandleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (!isValidFormData()) {
      setIsLoading(false)
      return
    }

    const imageUrl = await uploadImageToCloudinary()

    const userToUpdate: TEditProfileDto = {
      email: email.value,
      username: username.value,
      profilePic: imageUrl || data?.profilePic || ''
    }

    const userUpdated = await updateUserProfile(userToUpdate)
    await mutateUser(userUpdated)
    setIsLoading(false)
    showSuccessMessage('Profile updated successfully!')
  }

  return {
    handleSubmit,
    isLoading
  }
}
