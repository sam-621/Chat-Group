import { Logo } from '@components/atoms/Logo'
import { PrimaryLink } from '@components/atoms/PrimaryLink'
import { useAuthContext } from '@contexts/Auth.context'
import { DEFAULT_USER_IMAGE } from '@helpers/images'
import { mediaFrom768 } from '@helpers/media-queries'
import { useUser } from '@hooks/fetch/useUser'
import { useMedia } from '@hooks/useMedia'
import Image from 'next/image'

export const Nav = () => {
  const isMobile = useMedia(mediaFrom768)
  const { data } = useUser()
  const { isLogged } = useAuthContext()
  const userImage = isLogged ? data?.profilePic || DEFAULT_USER_IMAGE : DEFAULT_USER_IMAGE

  return (
    <nav className={`md:px-20 md:py-5 ${isMobile && 'flex items-center justify-between m-4'}`}>
      <Logo />
      {isMobile && (
        <>
          {isLogged ? (
            <Image
              src={userImage}
              width={48}
              height={48}
              alt="User"
              className="object-cover rounded-full"
            />
          ) : (
            <PrimaryLink className="py-1 px-4" href="/login">
              Login
            </PrimaryLink>
          )}
        </>
      )}
    </nav>
  )
}
