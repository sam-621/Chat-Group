import { GlobalChat } from '@components/containers/GlobalChat'
import { Nav } from '@components/containers/Nav'
import { WelcomeCard } from '@components/containers/WelcomeCard'
import { AsideCard } from '@components/layouts/AsideCard'
import { mediaFrom768 } from '@helpers/media-queries'
import { useMedia } from '@hooks/useMedia'

export const HomeView = () => {
  const isMobile = useMedia(mediaFrom768)

  return (
    <div className="max-h-screen h-screen flex flex-col flex-1 gap-10">
      <Nav />
      <main className="md:flex md:flex-1 md:mx-20 h-4/5 mb-4 md:mb-10 md:gap-40">
        <GlobalChat />
        {!isMobile && (
          <AsideCard>
            <WelcomeCard />
          </AsideCard>
        )}
      </main>
    </div>
  )
}
