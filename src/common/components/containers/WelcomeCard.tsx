import { PrimaryLink } from '@components/atoms/PrimaryLink'
import { Strong } from '@components/atoms/Strong'
import { DEFAULT_USER_IMAGE } from '@helpers/images'
import Image from 'next/image'

export const WelcomeCard = () => {
  return (
    <div className="p-12">
      <div className="flex justify-center">
        <Image src={DEFAULT_USER_IMAGE} width={200} height={200} alt="User" />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-center">
          Send <Strong>messages</Strong> in real time and meet new <Strong>people</Strong>
        </p>
        <PrimaryLink href="/register" className="py-5">
          Get in with email
        </PrimaryLink>
      </div>
    </div>
  )
}
