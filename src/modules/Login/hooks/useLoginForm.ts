import { useForm } from '@hooks/useForm'
import { useHandleAuth } from '@hooks/useHandleAuth'
import { TUseInput } from '@hooks/useInput'
import { TUserLoginDto } from '@interfaces/services/auth.interface'
import { THandleSubmit } from '@interfaces/utils.interface'
import { useState } from 'react'

export const useLoginForm: TUseLoginForm = (email, password) => {
  const [isLoading, setIsLoading] = useState(false)
  const { isValidFormData } = useForm({ email, password })
  const { login } = useHandleAuth()

  const handleSubmit: THandleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (!isValidFormData()) {
      setIsLoading(false)
      return
    }

    const userToSave: TUserLoginDto = {
      email: email.value,
      password: password.value
    }

    await login(userToSave)
    setIsLoading(false)
  }

  return {
    handleSubmit,
    isLoading
  }
}

type TUseLoginForm = {
  (email: TUseInput, password: TUseInput): {
    handleSubmit: THandleSubmit
    isLoading: boolean
  }
}
