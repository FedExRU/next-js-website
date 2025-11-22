'use client' // Error boundaries must be Client Components

import { ThemeProvider } from '@frontend/app'
import { CallIcon, MailIcon, Typography } from '@frontend/shared/ui'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

export type GlobalErrorProps = {
  error: Error
}

const DEFAULT_ERROR_CAUSE = 'Unexpected Error Occupied...'

const ERROR_CAUSE_BY_ERROR_CODE = {
  ECONNREFUSED: 'Data Base Connection Lost...',
}

export default function GlobalError({ error }: GlobalErrorProps) {
  const cause =
    ERROR_CAUSE_BY_ERROR_CODE?.[
      error.message as keyof typeof ERROR_CAUSE_BY_ERROR_CODE
    ] ?? DEFAULT_ERROR_CAUSE

  console.log('foo-error.message', error.message)

  return (
    <html lang="en-US">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '100vh',
                justifyContent: 'center',
                px: 6,
              }}
            >
              <Typography align="center" variant="h4">
                {cause}
              </Typography>
              <Typography align="center" variant="body1">
                Please reload the page or contact to supervisor
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  align="center"
                  component={Link}
                  // @ts-expect-error href property missmatch
                  href="mailto:Z9TbG@example.com"
                  icon={<MailIcon />}
                  variant="body2"
                >
                  Z9TbG@example.com
                </Typography>
                <Typography
                  align="center"
                  component={Link}
                  // @ts-expect-error href property missmatch
                  href="tel:1234567890"
                  icon={<CallIcon />}
                  variant="body2"
                >
                  +7 499 681 88 88
                </Typography>
              </Box>
              {/* <Box>
                <Button variant="contained">Перезагрузить</Button>
              </Box> */}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
