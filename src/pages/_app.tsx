import { QueryClient, QueryClientProvider } from 'react-query'

import '../styles/reset.css'
import '../styles/globals.css'

/**
 * React query client.
 */
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
