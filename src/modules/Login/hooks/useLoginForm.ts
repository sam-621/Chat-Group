import { useForm } from '@hooks/useForm'
import { TUseInput } from '@hooks/useInput'
import { TUserLoginDto } from '@interfaces/services/auth.interface'
import { THandleSubmit } from '@interfaces/utils.interface'

export const useLoginForm: TUseLoginForm = (email, password, cb) => {
  const { isValidFormData } = useForm({ email, password })

  const userToSave: TUserLoginDto = {
    email: email.value,
    password: password.value
  }

  const handleSubmit: THandleSubmit = (e) => {
    e.preventDefault()

    if (!isValidFormData()) return

    cb(userToSave)
  }

  return {
    handleSubmit
  }
}

type TUseLoginForm = {
  (email: TUseInput, password: TUseInput, cb: (user: TUserLoginDto) => void): {
    handleSubmit: THandleSubmit
  }
}
