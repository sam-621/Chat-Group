import { isValidEmail } from '@helpers/auth'
import { TUseInput } from './useInput'

export const useForm: TUseForm = ({ username, email, password }) => {
  const usernameExists = Boolean(username)
  const emailExists = Boolean(email)
  const passwordExists = Boolean(password)

  const cleanErrors = () => {
    username?.setError('')
    email?.setError('')
    password?.setError('')
  }
  const isValidFormData = () => {
    cleanErrors()

    if (usernameExists && !username?.value) {
      username?.setError('Username should not be empty')
      return false
    }

    if (emailExists && !email?.value) {
      email?.setError('Email must not be empty')
      return false
    }

    if (emailExists && !isValidEmail(email?.value || '')) {
      email?.setError('Email format is not correct')
      return false
    }

    if (passwordExists && (password?.value?.length || 0) < 6) {
      password?.setError('Password must be bigger than 5 characters')
      return false
    }

    return true
  }

  return {
    isValidFormData
  }
}

type TUseForm = {
  (props: TUseFormProps): {
    isValidFormData: () => boolean
  }
}

type TUseFormProps = {
  username?: TUseInput
  email?: TUseInput
  password?: TUseInput
}
