import { useForm } from '@hooks/useForm'
import { TUseInput } from '@hooks/useInput'
import { THandleSubmit } from '@interfaces/utils.interface'
import { RefObject } from 'react'

export const useEditProfileForm = (
  username: TUseInput,
  email: TUseInput,
  image: RefObject<HTMLInputElement>
) => {
  const { isValidFormData } = useForm({ username, email })

  const handleSubmit: THandleSubmit = (e) => {
    e.preventDefault()

    if (!isValidFormData()) return
  }

  return { handleSubmit }
}
