import { Message } from '@components/molecules/Message'
import { InputMessage } from '@components/organisms/chat/InputMessage'
import { getUserIdFromSS } from '@helpers/user'
import { useUser } from '@hooks/fetch/useUser'
import { useGlobalChat } from '@hooks/useGlobalChat'
import { useInput } from '@hooks/useInput'

export const GlobalChat = () => {
  const inputMessage = useInput('text')
  const { messages, sendMessage } = useGlobalChat(inputMessage)
  const { data } = useUser()

  return (
    <section className="flex w-2/3 flex-col">
      <div className="flex-1 overflow-y-scroll ">
        {messages.map((message) => (
          <Message
            isOwner={message.owner.id === (data?._id || getUserIdFromSS())}
            key={message.id}
            userImage={message.owner.profilePic}
            username={message.owner.username}
            content={message.message}
          />
        ))}
      </div>
      <InputMessage className="mt-14" {...inputMessage} onSubmit={sendMessage} />
    </section>
  )
}
