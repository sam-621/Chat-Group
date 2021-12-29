import { Input } from '@components/atoms/Input'
import { PrimaryButton } from '@components/atoms/PrimaryButton'
import { useHandleAuth } from '@hooks/useHandleAuth'
import { useInput } from '@hooks/useInput'
import { useLoginForm } from '../hooks/useLoginForm'

export const LoginForm = () => {
  const email = useInput('email')
  const password = useInput('password')
  const { login } = useHandleAuth()
  const { handleSubmit } = useLoginForm(email, password, (user) => login(user))

  return (
    <form onSubmit={handleSubmit} className="px-5 grid gap-5">
      <Input className="w-96" {...email} />
      <Input className="w-96" {...password} />
      <PrimaryButton className="py-5 mx-4 mt-9" type="submit">
        Login
      </PrimaryButton>
    </form>
  )
}
