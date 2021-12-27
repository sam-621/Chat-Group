import { TOKEN_FIELD } from '@constants/cookies.constants'
import cookies from 'js-cookie'

export const isLogged = Boolean(cookies.get(TOKEN_FIELD))
export const authRoutes = ['/login', '/register']
