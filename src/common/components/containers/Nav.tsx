import { Logo } from '@components/atoms/Logo'
import { PrimaryLink } from '@components/atoms/PrimaryLink'
import { mediaFrom768 } from '@helpers/media-queries'
import { useMedia } from '@hooks/useMedia'

export const Nav = () => {
  const isMobile = useMedia(mediaFrom768)
  return (
    <nav className={`md:px-20 md:py-5 ${isMobile && 'flex items-center justify-between m-4'}`}>
      <Logo />
      {isMobile && (
        <PrimaryLink className="py-1 px-4" href="/login">
          Login
        </PrimaryLink>
      )}
    </nav>
  )
}
