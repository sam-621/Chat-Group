import { Message } from '@components/molecules/Message'
import { InputMessage } from '@components/organisms/chat/InputMessage'
import { useInput } from '@hooks/useInput'

export const GlobalChat = () => {
  const inputMessage = useInput('text')
  return (
    <section className="flex w-2/3 flex-col">
      <div className="flex-1 overflow-y-scroll ">
        <Message
          userImage="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1639962091/me_ogu2uq.jpg"
          username="rogeliosamuel621"
          content="rogeliosamuel621 is my name and i just want to see what is this app about :). And also jajaja i dont know"
        />
      </div>
      <InputMessage className="mt-14" {...inputMessage} />
    </section>
  )
}
