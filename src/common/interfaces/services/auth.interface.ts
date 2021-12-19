import { IUser } from '@interfaces/user.interface'

// Dto
export type TUserLoginDto = Pick<IUser, 'email' | 'password'>
export type TUserRegisterDto = Omit<IUser, 'profilePic'>

// Responses
export interface ILoginResponse {
  token: string
  user: Omit<IUser, 'password'> & { _id: string }
}
