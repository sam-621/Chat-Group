import { TUserRegisterDto } from '@interfaces/services/auth.interface'
import { AuthService } from '@services/auth.service'

const authService = new AuthService()

export const registerUser = async (user: TUserRegisterDto) => {
  const serviceResponse = await authService.register(user)

  return serviceResponse
}
