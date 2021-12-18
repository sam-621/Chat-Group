import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Nav } from '@components/containers/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
