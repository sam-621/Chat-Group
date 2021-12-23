import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { TUserProfileResponse } from '@interfaces/services/user.interface'
import { v4 } from 'uuid'
import { DEFAULT_USER_IMAGE } from './images'

/**
 * Helper which gives you the structure for message
 * @param message messages to send
 * @param user user owner
 * @returns message structure to send to backend
 */
export const buildPublicMessage = (
  message: string,
  user: TUserProfileResponse | undefined
): IGlobalChatDto => {
  return {
    id: v4(),
    message,
    owner: {
      profilePic: user?.profilePic || DEFAULT_USER_IMAGE,
      username: user?.username || 'Anonymous'
    }
  }
}
