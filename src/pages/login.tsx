import { useAuth } from '@hooks/useAuth'

const LoginPage = () => {
  const { isLoading } = useAuth()
  return isLoading ? <h1>loading</h1> : <h1>login</h1>
}

export default LoginPage
