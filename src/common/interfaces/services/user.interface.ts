import { IUser } from '@interfaces/user.interface'

// Dto
export type TEditProfileDto = Omit<IUser, 'password'>

// Responses
export type TUserProfileResponse = Omit<IUser, 'password'> & {
  _id: string
}
