import Image from 'next/image'

export const InputMessage = () => {
  return (
    <form>
      <input type="text" placeholder="Type a message" />
      <button type="submit">
        <Image src="/icons/send.svg" alt="Send" />
      </button>
    </form>
  )
}
