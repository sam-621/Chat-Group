/* eslint-disable @typescript-eslint/no-empty-function */
import { TOKEN_FIELD } from '@constants/cookies.constants'
import { getIsLogged } from '@helpers/auth'
import { removeCookie } from '@libs/cookies'
import { useRouter } from 'next/router'
import { createContext, FC, useContext, useState } from 'react'

export const AuthContext = createContext({
  isLogged: getIsLogged(),
  logOut: () => {},
  login: () => {}
})

export const AuthProvider: FC = ({ children }) => {
  const router = useRouter()
  const [isLogged, setIsLogged] = useState(getIsLogged)

  const logOut = () => {
    removeCookie(TOKEN_FIELD)
    setIsLogged(false)
    router.push('/')
  }

  const login = () => {
    setIsLogged(true)
  }

  return <AuthContext.Provider value={{ isLogged, logOut, login }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
