import {
  TEditProfileDto,
  TEditProfileResponse,
  TUserProfileResponse
} from '@interfaces/services/user.interface'
import { UserService } from '@services/user.service'

const userService = new UserService()

export const getUserProfile = async (): Promise<TUserProfileResponse> => {
  const { data, response } = await userService.getUserProfile()

  if (!data) {
    throw response
  }

  return data
}

export const updateUserProfile = async (user: TEditProfileDto): Promise<TEditProfileResponse> => {
  const { data, response } = await userService.updateUserProfile(user)

  if (!data) {
    throw response
  }

  return data
}
