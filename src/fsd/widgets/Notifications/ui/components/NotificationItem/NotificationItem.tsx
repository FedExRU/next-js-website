import { CloseIcon } from '@fsd/shared'
import {
  Alert,
  AlertTitle,
  Box,
  Collapse,
  Fade,
  IconButton,
  Typography,
} from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'

import { AUTOCLOSE_TIME, FADE_DURATION } from './constants'
import { getStyles } from './styles'
import { NotificationItemProps } from './types'

export const NotificationItem: FC<NotificationItemProps> = ({
  autoCloseTime = AUTOCLOSE_TIME,
  color,
  id,
  message,
  onClosed,
  onOpened,
  title,
}) => {
  const autoCloseTimer = useRef<null | ReturnType<typeof setTimeout>>(null)
  const [isOpen, setIsOpen] = useState(true)

  const [fadeOpen, setFadeOpen] = useState(false)
  const [collapseOpen, setCollapseOpen] = useState(false)

  const { styles } = getStyles(color)

  const eraseTimer = () => {
    if (autoCloseTimer.current) {
      clearTimeout(autoCloseTimer.current)
    }
  }

  const handleCollapseExited = () => {
    onClosed?.(id)
  }

  const handleClose = () => {
    setIsOpen(false)
    eraseTimer()
    setFadeOpen(false)
  }

  const handleFadeExited = () => {
    setCollapseOpen(false)
  }

  const handleCollapseEntered = () => {
    setFadeOpen(true)
    onOpened?.(id)

    autoCloseTimer.current = setTimeout(() => {
      handleClose()
    }, autoCloseTime)
  }

  useEffect(() => {
    if (isOpen) {
      setCollapseOpen(true)
    } else {
      setFadeOpen(false)
    }
  }, [isOpen])

  useEffect(() => {
    return () => eraseTimer()
  }, [])

  return (
    <Collapse
      in={collapseOpen}
      onEntered={handleCollapseEntered}
      onExited={handleCollapseExited}
      unmountOnExit
    >
      <Box
        aria-atomic="true"
        aria-live="assertive"
        role="alert"
        sx={styles.notification}
      >
        <Fade in={fadeOpen} onExited={handleFadeExited} timeout={FADE_DURATION}>
          <Box
            action={
              <IconButton
                color="primary"
                onClick={handleClose}
                size="small"
                sx={styles.iconButton}
              >
                <Box component="span" sx={styles.iconButtonText}>
                  Close Notification
                </Box>
                <CloseIcon />
              </IconButton>
            }
            boxShadow={1}
            component={Alert}
            severity={color}
            sx={styles.notificationContainer}
          >
            <Box sx={styles.notificationIndicator} />
            {title && <AlertTitle component="p">{title}</AlertTitle>}
            <Typography variant="body2">{message}</Typography>
          </Box>
        </Fade>
      </Box>
    </Collapse>
  )
}
