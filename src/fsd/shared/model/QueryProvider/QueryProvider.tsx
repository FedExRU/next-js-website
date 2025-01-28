'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

import { QueryProviderProps } from './types'

const queryClient = new QueryClient()

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
