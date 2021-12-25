/* eslint-disable react-hooks/exhaustive-deps */
import { buildPublicMessage } from '@helpers/chat'
import { IGlobalChatDto } from '@interfaces/global-chat.interface'
import { emitMessage } from 'common/sockets/emitters'
import { listenForGlobalMessages } from 'common/sockets/listeners'
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

    emitMessage(messageToSend)
    input.cleanUp()
  }

  /**
   * Generate user id when user is not logged in
   * Get messages from server and update the current message state
   */
  useEffect(() => {
    listenForGlobalMessages(setMessage)
  }, [])

  /**
   * Update messages state to re render
   */
  useEffect(() => {
    if (!message) return
    setMessages([...messages, message as IGlobalChatDto])
  }, [message])

  return {
    messages,
    sendMessage
  }
}
