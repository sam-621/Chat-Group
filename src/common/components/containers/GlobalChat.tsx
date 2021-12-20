import { Message } from '@components/molecules/Message'
import { InputMessage } from '@components/organisms/chat/InputMessage'

export const GlobalChat = () => {
  return (
    <section className="col-span-4 mb-14 grid Global-chat-layout">
      <div className="overflow-y-scroll">
        <Message
          userImage="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1639962091/me_ogu2uq.jpg"
          username="rogeliosamuel621"
          content="rogeliosamuel621 is my name and i just want to see what is this app about :). And also jajaja i dont know"
        />
        <Message
          userImage="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1639962091/me_ogu2uq.jpg"
          username="rogeliosamuel621"
          content="rogeliosamuel621 is my name and i just want to see what is this app about :). And also jajaja i dont know"
        />
        <Message
          userImage="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1639962091/me_ogu2uq.jpg"
          username="rogeliosamuel621"
          content="rogeliosamuel621 is my name and i just want to see what is this app about :). And also jajaja i dont know"
        />
        <Message
          userImage="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1639962091/me_ogu2uq.jpg"
          username="rogeliosamuel621"
          content="rogeliosamuel621 is my name and i just want to see what is this app about :). And also jajaja i dont know"
        />
        <Message
          isOwner
          userImage="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1639962091/me_ogu2uq.jpg"
          username="rogeliosamuel621"
          content="rogeliosamuel621 is my name and i just want to see what is this app about :). And also jajaja i dont know"
        />
        <Message
          userImage="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1639962091/me_ogu2uq.jpg"
          username="rogeliosamuel621"
          content="rogeliosamuel621 is my name and i just want to see what is this app about :). And also jajaja i dont know"
        />
      </div>
      <InputMessage className="mt-14" />
    </section>
  )
}
