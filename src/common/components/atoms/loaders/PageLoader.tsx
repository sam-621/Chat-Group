import { Logo } from '../Logo'

export const PageLoader = () => {
  return (
    <div className="h-screen flex justify-center items-center animate-pulse">
      <Logo />
    </div>
  )
}
