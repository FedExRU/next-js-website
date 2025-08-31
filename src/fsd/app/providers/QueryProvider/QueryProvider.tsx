'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { QueryProviderProps } from './types'

const queryClient = new QueryClient()

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
