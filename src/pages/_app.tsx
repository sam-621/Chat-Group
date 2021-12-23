import '../styles/main.css'
import type { AppProps } from 'next/app'
import { connectSockets } from '@modules/Sockets/connection'

function MyApp({ Component, pageProps }: AppProps) {
  connectSockets()
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
