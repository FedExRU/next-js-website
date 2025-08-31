import { AUTH_ROUTES } from '@fsd/shared/routes'
import { Grid } from '@mui/material'
import Link from 'next/link'

import { SiteSearch } from './siteSearch'
export const Toolbar: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid size="auto">
        <SiteSearch />
      </Grid>
      <Grid size="auto">
        <Link href={AUTH_ROUTES.LOGIN.path}></Link>
      </Grid>
    </Grid>
  )
}
