import MuiDrawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'

import { Button } from '../button'
import { CloseIcon } from '../icons'
import { Typography } from '../typography'
import { getStyles } from './styles'
import { DrawerProps } from './types'

const { styles } = getStyles()

export const Drawer: React.FC<DrawerProps> = ({
  actionPrimary,
  actionSecondary,
  children,
  footer,
  htmlTitle,
  onClose,
  title,
  titleIcon,
  ...rest
}) => {
  const handleIconButtonClick = (event: React.MouseEvent) => {
    onClose?.(event, 'escapeKeyDown')
  }
  return (
    <MuiDrawer {...rest} onClose={onClose} title={htmlTitle}>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Grid container>
            {title && (
              <Grid size="grow">
                <Typography icon={titleIcon} variant="h6">
                  {title}
                </Typography>
              </Grid>
            )}
            <Grid size="auto" sx={styles.closeButtonContainer}>
              <IconButton
                aria-label={`Close ${title || 'Drawer'}`}
                onClick={handleIconButtonClick}
                sx={styles.closeButton}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>{children}</Grid>
      </Grid>

      {(actionPrimary || actionSecondary || footer) && (
        <Grid container sx={styles.footer}>
          {footer && <Grid size={12}>{footer}</Grid>}
          {(actionPrimary || actionSecondary) && (
            <Grid size={12}>
              <Grid container spacing={2}>
                {actionPrimary && (
                  <Grid size={12}>
                    <Button {...actionPrimary} fullWidth variant="contained" />
                  </Grid>
                )}
                {actionSecondary && (
                  <Grid size={12} sx={styles.actionSecondaryWrapper}>
                    <Button
                      {...actionSecondary}
                      size="xSmall"
                      sx={styles.actionSecondary}
                      variant="text"
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
    </MuiDrawer>
  )
}
