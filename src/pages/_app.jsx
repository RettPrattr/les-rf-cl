import '@/styles/App.sass'
import { SessionProvider } from "next-auth/react"

import Layout from '@/components/layouts/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    // <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
    // </SessionProvider>

  )
}
