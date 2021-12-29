import { registerUser } from '@apis/auth.api'
import { validateAuthFormData } from '@helpers/auth'
import { TUserRegisterDto } from '@interfaces/services/auth.interface'
import { showErrorMessage } from '@libs/toast.lib'
import { useRouter } from 'next/router'

export const useHandleAuth = () => {
  const router = useRouter()

  const register = async (user: TUserRegisterDto) => {
    const { email, password, username } = user

    const { isValidData, message } = validateAuthFormData(email, password, username)

    if (!isValidData) {
      showErrorMessage(message)
      return
    }

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
