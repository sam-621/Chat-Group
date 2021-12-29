import { FC } from 'react'
import { StrongLink } from './StrongLink'

export const FooterForm: FC<Props> = ({ isLogin }) => {
  const text = isLogin ? 'Don’t you have an account?' : 'Already have an account?'
  return (
    <footer>
      <p className="text-center mt-10">
        {text}{' '}
        {isLogin ? (
          <StrongLink href="/register">Register</StrongLink>
        ) : (
          <StrongLink href="/login">Login</StrongLink>
        )}
      </p>
    </footer>
  )
}

type Props = {
  isLogin?: boolean
}
