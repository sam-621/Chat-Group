import { GlobalChat } from '@components/containers/GlobalChat'
import { Nav } from '@components/containers/Nav'

export const HomeView = () => {
  return (
    <div className="grid grid-rows-3">
      <Nav />
      <main className="grid grid-cols-3">
        <GlobalChat />
        <div>hi</div>
      </main>
    </div>
  )
}
