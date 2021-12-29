import { useAuth } from '@hooks/useAuth'
import { LoginView } from '@modules/Login/LoginView'

const LoginPage = () => {
  const { isLoading } = useAuth()
  return isLoading ? <h1>loading</h1> : <LoginView />
}

export default LoginPage
