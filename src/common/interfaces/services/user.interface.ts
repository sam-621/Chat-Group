import { IUser } from '@interfaces/user.interface'

// Responses
export type TUserProfileResponse = Omit<IUser, 'password'> & {
  _id: string
}
