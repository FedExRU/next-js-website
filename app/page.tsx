import type { Metadata } from 'next'

import { HomePage } from '@frontend/pages/home'

export const metadata: Metadata = {
  description: '...',
  title: '...',
}

export default function Home() {
  return <HomePage />
}
