import { TOKEN_FIELD } from '@constants/cookies.constants'
import { IValidateAuthFormData } from '@interfaces/helpers/auth.interface'
import cookies from 'js-cookie'

export const getIsLogged = () => Boolean(cookies.get(TOKEN_FIELD))
export const getToken = () => cookies.get(TOKEN_FIELD)
export const authRoutes = ['/login', '/register']

export const validateAuthFormData: IValidateAuthFormData = (email, password, username) => {
  if (!email) {
    return {
      isValidData: false,
      message: 'Email should not be empty'
    }
  }

  if (!password) {
    return {
      isValidData: false,
      message: 'Password should not be empty'
    }
  }

  if (username !== undefined && !username) {
    return {
      isValidData: false,
      message: 'Username should not be empty'
    }
  }

  if (password.length < 6) {
    return {
      isValidData: false,
      message: 'Password must be bigger than 5 characters'
    }
  }

  return {
    isValidData: true,
    message: ''
  }
}
