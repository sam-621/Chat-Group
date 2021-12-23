import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { IUser } from '@interfaces/user.interface'

export const buildPublicMessage = (message: string, user: IUser): IGlobalChatDto => {
  return {
    message,
    owner: {
      profilePic: user.profilePic || '',
      username: user.username
    }
  }
}
