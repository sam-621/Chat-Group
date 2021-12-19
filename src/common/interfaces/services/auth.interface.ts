import { IUser } from '@interfaces/user.interface'

export type TLoginDto = Pick<IUser, 'email' | 'password'>
export type TRegisterDto = Omit<IUser, 'profilePic'>
