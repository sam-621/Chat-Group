import { useAuth } from '@hooks/useAuth'
import { RegisterView } from '@modules/Register/RegisterView'

const RegisterPage = () => {
  const { isLoading } = useAuth()

  if (isLoading) {
    return <h1>Loading</h1>
  }

  return <RegisterView />
}

export default RegisterPage
