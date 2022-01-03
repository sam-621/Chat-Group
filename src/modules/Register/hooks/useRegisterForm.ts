import { useForm } from '@hooks/useForm'
import { TUseInput } from '@hooks/useInput'
import { TUserRegisterDto } from '@interfaces/services/auth.interface'
import { THandleSubmit } from '@interfaces/utils.interface'

export const useRegisterForm: TUseRegisterForm = (username, email, password, cb) => {
  const { isValidFormData } = useForm({ username, email, password })

  const userToSave: TUserRegisterDto = {
    username: username.value,
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

type TUseRegisterForm = {
  (
    username: TUseInput,
    email: TUseInput,
    password: TUseInput,
    cb: (user: TUserRegisterDto) => void
  ): {
    handleSubmit: THandleSubmit
  }
}
