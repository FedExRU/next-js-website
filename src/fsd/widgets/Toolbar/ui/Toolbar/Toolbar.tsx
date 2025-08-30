import { AUTH_ROUTES } from '@fsd/shared'
import { Grid } from '@mui/material'
import Link from 'next/Link'

import { SiteSearch } from '../../../SiteSearch'
export const Toolbar: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid size="auto">
        <SiteSearch />
      </Grid>
      <Grid size="auto">
        <Link href={AUTH_ROUTES.LOGIN}></Link>
      </Grid>
    </Grid>
  )
}
