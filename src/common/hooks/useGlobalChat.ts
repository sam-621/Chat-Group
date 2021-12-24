import { PUBLIC_CHAT } from '@constants/socket.constants'
import { buildPublicMessage } from '@helpers/chat'
import { generateUserId } from '@helpers/user'
import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { socket } from 'common/sockets/connection'
import { FormEvent, useEffect, useState } from 'react'
import { useUser } from './fetch/useUser'
import { TUseInput } from './useInput'

export const useGlobalChat = (input: TUseInput) => {
  const [messages, setMessages] = useState<IGlobalChatDto[]>([])
  const [message, setMessage] = useState<IGlobalChatDto>()

  const { data } = useUser()

  const currentMessage = input.value

  /**
   * Functions which send message with the correct message structure
   * @param message Message to send
   * @returns
   */
  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.value) return

    const messageToSend = buildPublicMessage(currentMessage, data)

    socket.emit(PUBLIC_CHAT, messageToSend)
    input.cleanUp()
  }

  /**
   * Get messages from server and update the current message state
   */
  useEffect(() => {
    generateUserId()
    socket.on(PUBLIC_CHAT, (socket: IGlobalChatDto) => {
      setMessage(socket)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Update messages state to re render
   */
  useEffect(() => {
    if (!message) return
    setMessages([...messages, message as IGlobalChatDto])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])

  return {
    messages,
    sendMessage
  }
}
