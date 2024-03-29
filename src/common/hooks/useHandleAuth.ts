import { loginUser, registerUser } from '@apis/auth.api'
import { TOKEN_FIELD } from '@constants/cookies.constants'
import { useAuthContext } from '@contexts/Auth.context'
import { TUserLoginDto, TUserRegisterDto } from '@interfaces/services/auth.interface'
import { setCookie } from '@libs/cookies'
import { showErrorMessage } from '@libs/toast.lib'
import { useRouter } from 'next/router'
import { useUser } from './fetch/useUser'

export const useHandleAuth = () => {
  const router = useRouter()
  const { mutateUser } = useUser()
  const { login: loginInContext } = useAuthContext()

  const register = async (user: TUserRegisterDto) => {
    const { data, response } = await registerUser(user)

    if (!data) {
      showErrorMessage(response.data.message)
      return
    }

    setCookie(TOKEN_FIELD, data.token)
    loginInContext()
    mutateUser()
    router.push('/')
  }

  const login = async (user: TUserLoginDto) => {
    const { data, response } = await loginUser(user)

    if (!data) {
      showErrorMessage(response.data.message)
      return
    }

    setCookie(TOKEN_FIELD, data.token)
    loginInContext()
    mutateUser()
    router.push('/')
  }

  return {
    register,
    login
  }
}
