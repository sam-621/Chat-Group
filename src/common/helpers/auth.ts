import { TOKEN_FIELD } from '@constants/cookies.constants'
import { getCookie } from '@libs/cookies'

export const getIsLogged = () => Boolean(getCookie(TOKEN_FIELD))
export const getToken = () => getCookie(TOKEN_FIELD)
export const authRoutes = ['/login', '/register']

export const isValidEmail = (email: string) => {
  const regExp = new RegExp(/.+\@.+\.[a-zA-Z]+/gi)
  return regExp.test(email)
}
