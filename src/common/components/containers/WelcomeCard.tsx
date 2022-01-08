import { UserCardInformation } from '@components/molecules/UserCardInformation'
import { useUserImage } from '@hooks/useUserImage'
import Image from 'next/image'

export const WelcomeCard = () => {
  const { userImage } = useUserImage()
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
      <UserCardInformation />
    </div>
  )
}
