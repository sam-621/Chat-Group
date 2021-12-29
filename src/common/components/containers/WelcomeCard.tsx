import { Loader } from '@components/atoms/loaders/Loader'
import { UserCardInformation } from '@components/molecules/UserCardInformation'
import { DEFAULT_USER_IMAGE } from '@helpers/images'
import { useUser } from '@hooks/fetch/useUser'
import Image from 'next/image'

export const WelcomeCard = () => {
  const { data, isLoading } = useUser()

  return (
    <div className="p-12">
      <div className="flex justify-center">
        <Image src={data?.profilePic || DEFAULT_USER_IMAGE} width={200} height={200} alt="User" />
      </div>
      {isLoading ? <Loader /> : <UserCardInformation />}
    </div>
  )
}
