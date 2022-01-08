import { Input } from '@components/atoms/Input'
import { PrimaryButton } from '@components/atoms/PrimaryButton'
import { useInput } from '@hooks/useInput'
import { useLoginForm } from '../hooks/useLoginForm'

export const LoginForm = () => {
  const email = useInput('email')
  const password = useInput('password')
  const { handleSubmit, isLoading } = useLoginForm(email, password)

  return (
    <form onSubmit={handleSubmit} className="px-5 grid gap-5">
      <Input className="md:w-96" {...email} />
      <Input className="md:w-96" {...password} />
      <PrimaryButton
        className={`py-5 mx-4 mt-9 ${isLoading && 'bg-gray-300'}`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Getting in...' : 'Login'}
      </PrimaryButton>
    </form>
  )
}
