import { Input } from '@components/atoms/Input'
import { PrimaryButton } from '@components/atoms/PrimaryButton'
import { useHandleAuth } from '@hooks/useHanldeAuth'
import { useInput } from '@hooks/useInput'
import { TUserRegisterDto } from '@interfaces/services/auth.interface'
import { FormEvent } from 'react'

export const RegisterForm = () => {
  const username = useInput('text')
  const email = useInput('email')
  const password = useInput('password')
  const { register } = useHandleAuth()

  const user: TUserRegisterDto = {
    email: email.value,
    password: password.value,
    username: username.value
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    register(user)
  }

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
