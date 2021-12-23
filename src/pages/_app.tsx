import '../styles/main.css'
import type { AppProps } from 'next/app'
import { connectSockets } from 'common/sockets/connection'

function MyApp({ Component, pageProps }: AppProps) {
  connectSockets()
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
