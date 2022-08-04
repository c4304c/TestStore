import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { shopProvider } from '../context/shopContext'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider
  serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
  appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
  >
    <shopProvider>
      <Component {...pageProps} />
    </shopProvider>
  </MoralisProvider>
  )
}

export default MyApp
