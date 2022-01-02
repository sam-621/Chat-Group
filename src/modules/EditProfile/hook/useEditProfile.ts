import { isValidEmail } from '@helpers/auth'
import { TUseInput } from '@hooks/useInput'
import { THandleSubmit } from '@interfaces/utils.interface'

export const useEditProfileForm = (username: TUseInput, email: TUseInput, imageUrl: string) => {
  const { setError: setUsernameError } = username
  const { setError: setEmailError } = email

  const cleanErrors = () => {
    setUsernameError('')
    setEmailError('')
  }

  const handleSubmit: THandleSubmit = (e) => {
    e.preventDefault()
    cleanErrors()
    if (!username.value) {
      setUsernameError('Username should not be empty')
      return
    }

    if (!email.value) {
      setEmailError('Email must not be empty')
      return
    }

    if (!isValidEmail(email.value)) {
      setEmailError('Email format is not correct')
      return
    }
  }

  return { handleSubmit }
}
