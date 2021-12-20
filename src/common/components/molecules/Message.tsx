import Image from 'next/image'
import { FC } from 'react'

export const Message: FC<Props> = ({ isOwner, userImage, username, content }) => {
  return (
    <article>
      <div>
        {/* user image */}
        <Image src={userImage} alt={username} />
      </div>
      <div>
        <span>{username}</span>
        <p>{content}</p>
      </div>
    </article>
  )
}

type Props = {
  isOwner?: boolean
  userImage: string
  username: string
  content: string
}
