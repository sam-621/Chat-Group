import { PUBLIC_CHAT } from '@constants/socket.constants'
import { buildPublicMessage } from '@helpers/socket'
import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { socket } from 'common/sockets/connection'
import { FormEvent, useEffect, useState } from 'react'
import { TUseInput } from './useInput'

export const useGlobalChat = (input: TUseInput) => {
  const [messages, setMessages] = useState<IGlobalChatDto[]>([])
  const currentMessage = input.value

  /**
   * Functions which send message with the correct message structure
   * @param message Message to send
   * @returns
   */
  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!messages) return

    const messageToSend = buildPublicMessage(currentMessage, {
      email: '',
      password: '',
      username: 'hi',
      profilePic: ''
    })

    socket.emit(PUBLIC_CHAT, messageToSend)
  }

  /**
   * Get messages from server and update state
   */
  useEffect(() => {
    socket.on(PUBLIC_CHAT, (socket: IGlobalChatDto) => {
      setMessages([...messages, socket])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    messages,
    sendMessage
  }
}
