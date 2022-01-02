import { Input } from '@components/atoms/Input'
import { PrimaryButton } from '@components/atoms/PrimaryButton'
import { useUser } from '@hooks/fetch/useUser'
import { useInput } from '@hooks/useInput'
import { ImageInput } from './ImageInput'

export const EditProfileForm = () => {
  const { data } = useUser()
  const email = useInput('email', data?.email)
  const username = useInput('text', data?.username)

  return (
    <form className="px-5 grid gap-5">
      <ImageInput />
      <Input className="w-96" {...username} />
      <Input className="w-96" {...email} />
      <PrimaryButton className="py-5 mx-4 mt-9" type="submit">
        Save changes
      </PrimaryButton>
    </form>
  )
}
