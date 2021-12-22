import '../styles/main.css'
import type { AppProps } from 'next/app'
import { connectSocket } from '@modules/Socket/connection'

function MyApp({ Component, pageProps }: AppProps) {
  connectSocket()
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
