import { GlobalChat } from '@components/containers/GlobalChat'
import { Nav } from '@components/containers/Nav'

export const HomeView = () => {
  return (
    <div className="max-h-screen h-screen flex flex-col flex-1 gap-10">
      <Nav />
      <main className="flex flex-1 mx-20 h-4/5 mb-10">
        <GlobalChat />
        <div>hi</div>
      </main>
    </div>
  )
}
