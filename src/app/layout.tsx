import type { Metadata } from 'next'

import { type DeviceType, QueryProvider, ThemeProvider } from '@fsd/shared'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { headers } from 'next/headers'
import { UAParser as parser } from 'ua-parser-js'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'yo!',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const headersList = await headers()

  const deviceType =
    parser(headersList.get('user-agent') as string).device.type || 'desktop'

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider deviceType={deviceType as DeviceType}>
            <QueryProvider>{children}</QueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
