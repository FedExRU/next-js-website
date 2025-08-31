'use client'

import { Grid, Tooltip } from '@mui/material'

import { generateTooltipText } from '../../../lib'
import { useGetSocialNetworksQuery } from '../../../model'
import { SocialNetworkItem } from './socialNetworkItem'
import { getSocialNetworksStyles as getStyles } from './styles'

const { styles } = getStyles()

export const SocialNetworks: React.FC = () => {
  const { data, isLoading } = useGetSocialNetworksQuery()

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Grid key={i} size="auto" sx={styles.flexWrapper}>
            <SocialNetworkItem skeleton skeletonColor="secondary" />
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <Grid container spacing={3}>
      {data?.items.map(({ id, name, ...rest }) => (
        <Grid key={id} size="auto" sx={styles.flexWrapper}>
          <Tooltip
            arrow
            describeChild
            disableTouchListener
            placement="top"
            title={generateTooltipText(name)}
          >
            <SocialNetworkItem id={id} name={name} {...rest} />
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  )
}
