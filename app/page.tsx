import { HomePage } from '@frontend/pages/home'

import { generateMetadata as generateMetadataFunc } from './utils'

export const generateMetadata = generateMetadataFunc

export default function Home() {
  return <HomePage />
}
