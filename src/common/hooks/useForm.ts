import { isValidEmail } from '@helpers/auth'
import { useState } from 'react'
import { TUseInput } from './useInput'

export const useForm: TUseForm = ({ username, email, password }) => {
  const [isFormOk, setIsFormOk] = useState(false)
  const { setError: setUsernameError } = username
  const { setError: setEmailError } = email
  const { setError: setPasswordError } = password

  const usernameExists = Boolean(username)
  const emailExists = Boolean(email)
  const passwordExists = Boolean(password)

  const cleanErrors = () => {
    setEmailError('')
    setPasswordError('')
    setUsernameError('')
  }
  const validateFormData = () => {
    cleanErrors()

    if (usernameExists && !username.value) {
      setUsernameError('Username should not be empty')
      return
    }

    if (emailExists && !email.value) {
      setEmailError('Email must not be empty')
      return
    }

    if (emailExists && !isValidEmail(email.value)) {
      setEmailError('Email format is not correct')
      return
    }

    if (passwordExists && !password.value) {
      setPasswordError('Password must not be empty')
      return
    }

    if (passwordExists && password.value.length < 6) {
      setPasswordError('Password must be bigger than 5 characters')
      return
    }

    setIsFormOk(true)
  }

  return {
    isFormOk,
    validateFormData
  }
}

type TUseForm = {
  (props: TUseFormProps): {
    isFormOk: boolean
    validateFormData: () => void
  }
}

type TUseFormProps = {
  username: TUseInput
  email: TUseInput
  password: TUseInput
}
