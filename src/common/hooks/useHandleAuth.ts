import { registerUser } from '@apis/auth.api'
import { TUserRegisterDto } from '@interfaces/services/auth.interface'
import { showErrorMessage } from '@libs/toast.lib'
import { useRouter } from 'next/router'

export const useHandleAuth = () => {
  const router = useRouter()

  const register = async (user: TUserRegisterDto) => {
    const { data, response } = await registerUser(user)

    if (!data) {
      showErrorMessage(response.data.message)
      return
    }

    router.push('/')
  }

  return {
    register
  }
}
