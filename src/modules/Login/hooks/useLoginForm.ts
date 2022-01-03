import { useForm } from '@hooks/useForm'
import { useHandleAuth } from '@hooks/useHandleAuth'
import { TUseInput } from '@hooks/useInput'
import { TUserLoginDto } from '@interfaces/services/auth.interface'
import { THandleSubmit } from '@interfaces/utils.interface'

export const useLoginForm: TUseLoginForm = (email, password) => {
  const { isValidFormData } = useForm({ email, password })
  const { login } = useHandleAuth()

  const userToSave: TUserLoginDto = {
    email: email.value,
    password: password.value
  }

  const handleSubmit: THandleSubmit = (e) => {
    e.preventDefault()

    if (!isValidFormData()) return

    login(userToSave)
  }

  return {
    handleSubmit
  }
}

type TUseLoginForm = {
  (email: TUseInput, password: TUseInput): {
    handleSubmit: THandleSubmit
  }
}
