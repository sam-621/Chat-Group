import { useForm } from '@hooks/useForm'
import { useHandleAuth } from '@hooks/useHandleAuth'
import { TUseInput } from '@hooks/useInput'
import { TUserRegisterDto } from '@interfaces/services/auth.interface'
import { THandleSubmit } from '@interfaces/utils.interface'
import { useState } from 'react'

export const useRegisterForm: TUseRegisterForm = (username, email, password) => {
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useHandleAuth()
  const { isValidFormData } = useForm({ username, email, password })

  const handleSubmit: THandleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (!isValidFormData()) {
      setIsLoading(false)
      return
    }

    const userToSave: TUserRegisterDto = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    await register(userToSave)
    setIsLoading(false)
  }

  return {
    handleSubmit,
    isLoading
  }
}

type TUseRegisterForm = {
  (username: TUseInput, email: TUseInput, password: TUseInput): {
    handleSubmit: THandleSubmit
    isLoading: boolean
  }
}
