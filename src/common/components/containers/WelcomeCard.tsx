import { Loader } from '@components/atoms/loaders/Loader'
import { UserCardInformation } from '@components/molecules/UserCardInformation'
import { useAuthContext } from '@contexts/Auth.context'
import { DEFAULT_USER_IMAGE } from '@helpers/images'
import { useUser } from '@hooks/fetch/useUser'
import Image from 'next/image'

export const WelcomeCard = () => {
  const { data, isLoading } = useUser()
  const { isLogged } = useAuthContext()
  const userImage = isLogged ? data?.profilePic || DEFAULT_USER_IMAGE : DEFAULT_USER_IMAGE

  return (
    <div className="p-12">
      <div className="flex justify-center">
        <Image
          src={userImage}
          width={200}
          height={200}
          alt="User"
          className="object-cover rounded-full"
        />
      </div>
      {isLoading ? <Loader /> : <UserCardInformation />}
    </div>
  )
}
