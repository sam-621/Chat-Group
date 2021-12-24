import { Strong } from '@components/atoms/Strong'
import { DEFAULT_USER_IMAGE } from '@helpers/images'
import Image from 'next/image'

export const WelcomeCard = () => {
  return (
    <div className="p-12">
      <div className="flex justify-center">
        <Image src={DEFAULT_USER_IMAGE} width={200} height={200} alt="User" />
      </div>
      <div>
        <p className="text-center">
          Send <Strong>messages</Strong> in real time and meet new <Strong>people</Strong>
        </p>
      </div>
    </div>
  )
}
