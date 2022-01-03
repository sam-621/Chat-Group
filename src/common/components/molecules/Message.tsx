import Image from 'next/image'
import { FC } from 'react'

export const Message: FC<Props> = ({ isOwner, userImage, username, content }) => {
  return (
    <article className={`flex gap-5 mb-5 ${isOwner ? 'ml-16 justify-end' : 'mr-12'}`}>
      {!isOwner && (
        <div className="flex items-end">
          {/* user image */}
          <Image
            className="border rounded-full object-cover"
            src={userImage}
            alt={username}
            width="40px"
            height="40px"
          />
        </div>
      )}
      <div className={`${isOwner ? 'bg-primary' : 'bg-secondary'} rounded-xl p-2`}>
        {!isOwner && <span className="text-gray-400 mb-1">{username}</span>}
        <p className={`${isOwner ? 'text-white' : 'text-text-black'}`}>{content}</p>
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
