import { Title } from '@components/atoms/Title'
import { GlobalChat } from '@components/containers/GlobalChat'
import { Nav } from '@components/containers/Nav'
import { AsideCard } from '@components/layouts/AsideCard'
import { RegisterForm } from './components/RegisterForm'

export const RegisterView = () => {
  return (
    <div className="max-h-screen h-screen flex flex-col flex-1 gap-10">
      <Nav />
      <main className="flex flex-1 mx-20 h-4/5 mb-10 gap-40">
        <GlobalChat />
        <AsideCard>
          <Title />
          <RegisterForm />
        </AsideCard>
      </main>
    </div>
  )
}
