import { PageLoader } from '@components/atoms/loaders/PageLoader'
import { useAuth } from '@hooks/useAuth'
import { LoginView } from '@modules/Login/LoginView'

const LoginPage = () => {
  const { isLoading } = useAuth()

  if (isLoading) {
    return <PageLoader />
  }

  return <LoginView />
}

export default LoginPage
