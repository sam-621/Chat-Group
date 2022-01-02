import { Input } from '@components/atoms/Input'
import { PrimaryButton } from '@components/atoms/PrimaryButton'
import { useUser } from '@hooks/fetch/useUser'
import { useInput } from '@hooks/useInput'
import { useEditProfileForm } from '../hook/useEditProfile'
import { ImageInput } from './ImageInput'

export const EditProfileForm = () => {
  const { data } = useUser()
  const email = useInput('email', data?.email)
  const username = useInput('text', data?.username)
  const { handleSubmit } = useEditProfileForm(username, email, '')

  return (
    <form className="px-5 grid gap-5" onSubmit={handleSubmit}>
      <ImageInput />
      <Input className="w-96" {...username} />
      <Input className="w-96" {...email} />
      <PrimaryButton className="py-5 mx-4 mt-9" type="submit">
        Save changes
      </PrimaryButton>
    </form>
  )
}
