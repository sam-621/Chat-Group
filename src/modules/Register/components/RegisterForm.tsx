import { Input } from '@components/atoms/Input'
import { PrimaryButton } from '@components/atoms/PrimaryButton'
import { useInput } from '@hooks/useInput'
import { useRegisterForm } from '../hooks/useRegisterForm'

export const RegisterForm = () => {
  const username = useInput('text')
  const email = useInput('email')
  const password = useInput('password')
  const { handleSubmit } = useRegisterForm(username, email, password)

  return (
    <form onSubmit={handleSubmit} className="px-5 grid gap-5">
      <Input className="w-96" {...username} />
      <Input className="w-96" {...email} />
      <Input className="w-96" {...password} />
      <PrimaryButton className="py-5 mx-4 mt-9" type="submit">
        Create account
      </PrimaryButton>
    </form>
  )
}
