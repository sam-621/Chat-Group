import { InputMessage } from '@components/organisms/chat/InputMessage'

export const GlobalChat = () => {
  return (
    <section
      className="col-span-2 bg-black"
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
