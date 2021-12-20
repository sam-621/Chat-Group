import { InputMessage } from '@components/organisms/chat/InputMessage'

export const GlobalChat = () => {
  return (
    <section
      className="col-span-3 mb-14 grid Global-chat-layout"
      style={{
        display: 'grid',
        gridTemplateRows: '1fr auto'
      }}
    >
      <div></div>
      <InputMessage />
    </section>
  )
}
