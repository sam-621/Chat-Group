import { useUser } from '@hooks/fetch/useUser'
import { useUserId } from '@hooks/useUserId'
import { createContext, FC, useContext } from 'react'

interface TInitialState {
  isLogged: boolean
}

const AuthContext = createContext<TInitialState>({ isLogged: false })

export const AuthProvider: FC = ({ children }) => {
  const { data, isLoading } = useUser()
  const { id } = useUserId()

  return (
    <>
      {isLoading && !id ? (
        <h1>Loading</h1>
      ) : (
        <AuthContext.Provider
          value={{
            isLogged: Boolean(data)
          }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </>
  )
}

export const useAuthContext = () => useContext(AuthContext)
