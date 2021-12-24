import { PUBLIC_CHAT } from '@constants/socket.constants'
import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { Dispatch, SetStateAction } from 'react'
import { socket } from './connection'

export const listenForGlobalMessages = (
  setMessage: Dispatch<SetStateAction<IGlobalChatDto | undefined>>
) => {
  socket.on(PUBLIC_CHAT, (socket: IGlobalChatDto) => {
    setMessage(socket)
  })
}
