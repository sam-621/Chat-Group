import { Input } from '@components/atoms/Input'
import { PrimaryButton } from '@components/atoms/PrimaryButton'
import { RedButton } from '@components/atoms/RedButton'
import { useAuthContext } from '@contexts/Auth.context'
import { useUser } from '@hooks/fetch/useUser'
import { useInput } from '@hooks/useInput'
import { useEditProfileForm } from '../hook/useEditProfileForm'
import { useImagePreview } from '../hook/useImagePreview'
import { ImageInput } from './ImageInput'

export const EditProfileForm = () => {
  const { data } = useUser()
  const email = useInput('email', data?.email)
  const username = useInput('text', data?.username)
  const imagePreview = useImagePreview()
  const { handleSubmit, isLoading } = useEditProfileForm(username, email, imagePreview.imageData)
  const { logOut } = useAuthContext()
  return (
    <form className="px-5 grid gap-5" onSubmit={handleSubmit}>
      <ImageInput {...imagePreview} />
      <Input className="md:w-96" {...username} />
      <Input className="md:w-96" {...email} />
      <PrimaryButton
        className={`py-5 mx-4 mt-9 ${isLoading && 'bg-gray-300'}`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Saving...' : 'Save changes'}
      </PrimaryButton>
      <RedButton className="py-4 mx-4" onClick={logOut}>
        Log out
      </RedButton>
    </form>
  )
}
