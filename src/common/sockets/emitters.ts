import { PUBLIC_CHAT } from '@constants/socket.constants'
import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { socket } from './connection'

export const emitMessage = (message: IGlobalChatDto) => {
  socket.emit(PUBLIC_CHAT, message)
}
