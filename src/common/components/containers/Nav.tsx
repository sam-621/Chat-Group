import { Logo } from '@components/atoms/Logo'
import { PrimaryLink } from '@components/atoms/PrimaryLink'
import { useAuthContext } from '@contexts/Auth.context'
import { mediaFrom768 } from '@helpers/media-queries'
import { useMedia } from '@hooks/useMedia'
import { useUserImage } from '@hooks/useUserImage'
import Image from 'next/image'
import Link from 'next/link'

export const Nav = () => {
  const isMobile = useMedia(mediaFrom768)
  const { userImage } = useUserImage()
  const { isLogged } = useAuthContext()

  return (
    <nav className={`md:px-20 md:py-5 ${isMobile && 'flex items-center justify-between m-4'}`}>
      <Logo />
      {isMobile && (
        <>
          {isLogged ? (
            <Link href="/edit/profile">
              <a href="">
                <Image
                  src={userImage}
                  width={48}
                  height={48}
                  alt="User"
                  className="object-cover rounded-full"
                />
              </a>
            </Link>
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
