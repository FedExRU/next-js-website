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

import { AUTOCLOSE_TIME } from './constants'
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
  const itemRef = useRef<HTMLDivElement | null>(null)
  const autoCloseTimer = useRef<null | ReturnType<typeof setTimeout>>(null)
  const [isOpen, setIsOpen] = useState(true)

  const [fadeOpen, setFadeOpen] = useState(false)
  const [collapseOpen, setCollapseOpen] = useState(false)

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
        sx={{ position: 'relative' }}
      >
        <Fade in={fadeOpen} onExited={handleFadeExited} timeout={500}>
          <Box
            action={
              <IconButton
                color="primary"
                onClick={handleClose}
                size="small"
                sx={{
                  bgcolor: 'transparent !important',
                  borderBottom: 'none',
                  boxShadow: 'none',
                }}
              >
                <Box
                  component="span"
                  sx={{ left: -999999, position: 'absolute' }}
                >
                  Close Notification
                </Box>
                <CloseIcon />
              </IconButton>
            }
            boxShadow={1}
            component={Alert}
            key={id}
            ref={itemRef}
            severity={color}
            sx={{
              bgcolor: 'common.white',
            }}
          >
            <Box
              sx={theme => ({
                backgroundColor:
                  color === undefined
                    ? theme.palette.primary.main
                    : theme.palette[color].main,
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: 4,
              })}
            />
            {title && <AlertTitle component="p">{title}</AlertTitle>}
            <Typography variant="body2">{message}</Typography>
          </Box>
        </Fade>
      </Box>
    </Collapse>
  )
}
