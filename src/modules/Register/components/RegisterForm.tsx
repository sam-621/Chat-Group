import { Input } from '@components/atoms/Input'
import { useInput } from '@hooks/useInput'

export const RegisterForm = () => {
  const username = useInput('text')
  const email = useInput('email')
  const password = useInput('password')

  return (
    <form action="">
      <Input {...username} />
      <Input {...email} />
      <Input {...password} />
    </form>
  )
}
