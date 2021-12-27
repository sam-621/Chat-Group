import { Input } from '@components/atoms/Input'
import { useInput } from '@hooks/useInput'

export const RegisterForm = () => {
  const username = useInput('text')
  const email = useInput('email')
  const password = useInput('password')

  return (
    <form action="" className="px-5 grid gap-5">
      <Input className="w-96" {...username} />
      <Input className="w-96" {...email} />
      <Input className="w-96" {...password} />
    </form>
  )
}
