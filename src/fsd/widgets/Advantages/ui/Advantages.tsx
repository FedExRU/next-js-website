import { FC } from 'react'
import { Grid2 as Grid } from '@mui/material'
import { ADVANTAGES_KIND, AdvantagesKind, getData } from '../lib'
import { Advantage } from './components'

//TODO: ADAPTIVE!!!
export const Advantages: FC = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {Object.values(ADVANTAGES_KIND).map(kind => (
        <Grid key={kind} size={{ xs: 6, md: 3 }}>
          <Advantage {...getData(kind as AdvantagesKind)} />
        </Grid>
      ))}
    </Grid>
  )
}
