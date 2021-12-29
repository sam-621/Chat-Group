import { TOKEN_FIELD } from '@constants/cookies.constants'
import { getIsLogged } from '@helpers/auth'
import { removeCookie } from '@libs/cookies'
import { createContext, FC, useContext, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const AuthContext = createContext({ isLogged: getIsLogged(), logOut: () => {} })

export const AuthProvider: FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(getIsLogged)

  const logOut = () => {
    removeCookie(TOKEN_FIELD)
    setIsLogged(false)
  }

  return <AuthContext.Provider value={{ isLogged, logOut }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
