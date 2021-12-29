import { TRegisterUser } from '@interfaces/user.interface'
import { AuthService } from '@services/auth.service'
import { useRouter } from 'next/router'

const authService = new AuthService()

export const useHandleAuth = () => {
  const router = useRouter()

  const register = async (user: TRegisterUser) => {
    const { email, password, username } = user

    if (!email) {
      console.log('Email should not be empty')
      return
    }

    if (!password) {
      console.log('Password should not be empty')
      return
    }

    if (!username) {
      console.log('Username should not be empty')
      return
    }

    if (password.length < 6) {
      console.log('Password must be bigger than 5 characters')
      return
    }

    const { data, response } = await authService.register(user)

    if (!data) {
      console.log(response.data.message)
      return
    }

    console.log('User registered')
    router.push('/')
  }

  return {
    register
  }
}
