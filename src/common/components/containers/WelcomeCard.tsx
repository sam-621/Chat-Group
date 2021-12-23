import { DEFAULT_USER_IMAGE } from '@helpers/images'
import Image from 'next/image'

export const WelcomeCard = () => {
  return (
    <div>
      <div>
        <Image src={DEFAULT_USER_IMAGE} width={200} height={200} alt="User" />
      </div>
      <div>
        <p>
          Send <strong>messages</strong> in real time and meet new <strong>people</strong>
        </p>
      </div>
    </div>
  )
}
