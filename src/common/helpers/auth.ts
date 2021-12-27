import { TOKEN_FIELD } from '@constants/cookies.constants'
import cookies from 'js-cookie'

export const getIsLogged = () => Boolean(cookies.get(TOKEN_FIELD))
export const getToken = () => cookies.get(TOKEN_FIELD)
export const authRoutes = ['/login', '/register']
