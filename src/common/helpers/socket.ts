import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { IUser } from '@interfaces/user.interface'
import { v4 } from 'uuid'

export const buildPublicMessage = (message: string, user: IUser): IGlobalChatDto => {
  return {
    id: v4(),
    message,
    owner: {
      profilePic: user.profilePic || '',
      username: user.username
    }
  }
}
