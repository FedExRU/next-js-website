'use client'

import { LAYOUT, VIEW } from '@fsd/shared/lib'
import { Grid, Tooltip } from '@mui/material'

import { generateTooltipText } from '../lib'
import { useGetSocialNetworksQuery } from '../model'
import { SocialNetworkListItem } from './socialNetworkListItem'
import { getSocialNetworksStyles as getStyles } from './styles'
import { SocialNetworksListProps } from './types'

const { styles } = getStyles()

export const SocialNetworksList: React.FC<SocialNetworksListProps> = ({
  layout = LAYOUT.PRIMARY,
  view = VIEW.DESKTOP,
}) => {
  const { data, isLoading } = useGetSocialNetworksQuery()

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Grid key={i} size="auto" sx={styles.flexWrapper}>
            <SocialNetworkListItem skeleton skeletonColor={layout} />
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
            title={
              view === VIEW.DESKTOP ? generateTooltipText(name) : undefined
            }
          >
            <SocialNetworkListItem
              id={id}
              name={name}
              {...rest}
              layout={layout}
            />
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  )
}
