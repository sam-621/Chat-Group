import { TUseInput } from '@hooks/useInput'
import { TUserLoginDto } from '@interfaces/services/auth.interface'
import { THandleSubmit } from '@interfaces/utils.interface'

export const useLoginForm: TUseLoginForm = (email, password, cb) => {
  const { setError: setEmailError } = email
  const { setError: setPasswordError } = password

  const userToSave: TUserLoginDto = {
    email: email.value,
    password: password.value
  }

  const cleanErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleSubmit: THandleSubmit = (e) => {
    e.preventDefault()
    cleanErrors()

    if (!email.value) {
      setEmailError('Email must not be empty')
      return
    }

    if (!password.value) {
      setPasswordError('Password must not be empty')
      return
    }

    if (password.value.length < 6) {
      setPasswordError('Password must be bigger than 5 characters')
      return
    }

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
