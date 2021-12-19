import { IUser } from '@interfaces/user.interface'

export type TUserLoginDto = Pick<IUser, 'email' | 'password'>
export type TUserRegisterDto = Omit<IUser, 'profilePic'>
