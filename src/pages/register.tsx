import { useAuth } from '@hooks/useAuth'

const RegisterPage = () => {
  const { isLoading } = useAuth()

  return isLoading ? <h1>loading</h1> : <h1>register</h1>
}

export default RegisterPage
