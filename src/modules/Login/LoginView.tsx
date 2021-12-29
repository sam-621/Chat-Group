import { Title } from '@components/atoms/Title'
import { GlobalChat } from '@components/containers/GlobalChat'
import { Nav } from '@components/containers/Nav'
import { AsideCard } from '@components/layouts/AsideCard'
import { LoginForm } from './components/LoginForm'

export const LoginView = () => {
  return (
    <div className="max-h-screen h-screen flex flex-col flex-1 gap-10">
      <Nav />
      <main className="flex flex-1 mx-20 h-4/5 mb-10 gap-40">
        <GlobalChat />
        <AsideCard>
          <Title className="mb-10" />
          <LoginForm />
        </AsideCard>
      </main>
    </div>
  )
}
