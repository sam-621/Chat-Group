import { PageLoader } from '@components/atoms/loaders/PageLoader'
import { useAuth } from '@hooks/useAuth'
import { RegisterView } from '@modules/Register/RegisterView'

const RegisterPage = () => {
  const { isLoading } = useAuth()

  if (isLoading) {
    return <PageLoader />
  }

  return <RegisterView />
}

export default RegisterPage
