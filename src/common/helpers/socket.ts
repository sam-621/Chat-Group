import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { IUser } from '@interfaces/user.interface'
import { v4 } from 'uuid'

/**
 * Helper which gives you the structure for message
 * @param message messages to send
 * @param user user owner
 * @returns message structure to send to backend
 */
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
