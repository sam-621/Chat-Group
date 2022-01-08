import { Title } from '@components/atoms/Title'
import { GlobalChat } from '@components/containers/GlobalChat'
import { Nav } from '@components/containers/Nav'
import { AsideCard } from '@components/layouts/AsideCard'
import { mediaFrom768 } from '@helpers/media-queries'
import { useMedia } from '@hooks/useMedia'
import { EditProfileForm } from './components/EditProfileForm'

export const EditProfileView = () => {
  const isMobile = useMedia(mediaFrom768)

  return (
    <div className="max-h-screen h-screen flex flex-col flex-1 gap-10">
      <Nav />
      {isMobile ? (
        <>
          <EditProfileForm />
        </>
      ) : (
        <main className="flex flex-1 mx-20 h-4/5 mb-10 gap-40">
          <GlobalChat />
          <AsideCard>
            <Title titleProp="Edit profile" className="mb-10" />
            <EditProfileForm />
          </AsideCard>
        </main>
      )}
    </div>
  )
}
