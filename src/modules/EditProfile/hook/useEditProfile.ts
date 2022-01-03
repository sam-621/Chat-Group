import { updateUserProfile } from '@apis/user.api'
import { useUser } from '@hooks/fetch/useUser'
import { useForm } from '@hooks/useForm'
import { TUseInput } from '@hooks/useInput'
import { TEditProfileDto } from '@interfaces/services/user.interface'
import { THandleSubmit } from '@interfaces/utils.interface'
import { RefObject } from 'react'

export const useEditProfileForm = (
  username: TUseInput,
  email: TUseInput,
  image: RefObject<HTMLInputElement>
) => {
  const { isValidFormData } = useForm({ username, email })
  // const { mutateUser } = useUser()

  const handleSubmit: THandleSubmit = async (e) => {
    e.preventDefault()

    if (!isValidFormData()) return
  }

  return { handleSubmit }
}
