import { isValidEmail } from '@helpers/auth'
import { TUseInput } from '@hooks/useInput'
import { TUserRegisterDto } from '@interfaces/services/auth.interface'
import { THandleSubmit } from '@interfaces/utils.interface'

export const useRegisterForm: TUseRegisterForm = (username, email, password, cb) => {
  const { setError: setUsernameError } = username
  const { setError: setEmailError } = email
  const { setError: setPasswordError } = password

  const userToSave: TUserRegisterDto = {
    username: username.value,
    email: email.value,
    password: password.value
  }

  const cleanErrors = () => {
    setEmailError('')
    setPasswordError('')
    setUsernameError('')
  }

  const handleSubmit: THandleSubmit = (e) => {
    e.preventDefault()
    cleanErrors()

    if (!email.value) {
      setEmailError('Email must not be empty')
      return
    }

    if (!isValidEmail(email.value)) {
      setEmailError('Email format is not correct')
      return
    }

    if (!password.value) {
      setPasswordError('Password must not be empty')
      return
    }

    if (!username.value) {
      setUsernameError('Username should not be empty')
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
