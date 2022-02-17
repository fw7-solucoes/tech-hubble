import { QueryClient, QueryClientProvider } from 'react-query'

import '../styles/globals.css'

/**
 * React query client.
 */
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
