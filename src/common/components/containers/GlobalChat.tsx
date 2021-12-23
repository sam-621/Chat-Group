import { Message } from '@components/molecules/Message'
import { InputMessage } from '@components/organisms/chat/InputMessage'
import { useGlobalChat } from '@hooks/useGlobalChat'
import { useInput } from '@hooks/useInput'

export const GlobalChat = () => {
  const inputMessage = useInput('text')
  const { messages, sendMessage } = useGlobalChat(inputMessage)

  return (
    <section className="flex w-2/3 flex-col">
      <div className="flex-1 overflow-y-scroll ">
        {messages.map((message) => (
          <Message
            key={message.id}
            userImage={message.owner.profilePic || '/icons/defautl-user.svg'}
            username={message.owner.username}
            content={message.message}
          />
        ))}
      </div>
      <InputMessage className="mt-14" {...inputMessage} onSubmit={sendMessage} />
    </section>
  )
}
