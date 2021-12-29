import { registerUser } from '@apis/auth.api'
import { validateAuthFormData } from '@helpers/auth'
import { TUserRegisterDto } from '@interfaces/services/auth.interface'
import { useRouter } from 'next/router'

export const useHandleAuth = () => {
  const router = useRouter()

  const register = async (user: TUserRegisterDto) => {
    const { email, password, username } = user

    const { isValidData, message } = validateAuthFormData(email, password, username)

    if (!isValidData) {
      console.log(message)
      return
    }

    const { data, response } = await registerUser(user)

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
