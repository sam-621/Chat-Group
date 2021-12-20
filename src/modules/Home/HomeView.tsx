import { GlobalChat } from '@components/containers/GlobalChat'
import { Nav } from '@components/containers/Nav'

export const HomeView = () => {
  return (
    <div
      className="h-screen"
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr'
      }}
    >
      <Nav />
      <main className="grid grid-cols-5 h-full mx-20">
        <GlobalChat />
        <div>hi</div>
      </main>
    </div>
  )
}
