import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-light-gray">
          <h1 className="text-center py-8 text-4xl font-light text-deep-charcoal">
            Loving Your Skin - Under Construction
          </h1>
          <p className="text-center text-text-secondary">
            B2B Korean Beauty Marketplace
          </p>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App