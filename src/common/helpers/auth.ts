import { TOKEN_FIELD } from '@constants/cookies.constants'
import { getCookie } from '@libs/cookies'

export const getIsLogged = () => Boolean(getCookie(TOKEN_FIELD))
export const getToken = () => getCookie(TOKEN_FIELD)
export const authRoutes = ['/login', '/register']
