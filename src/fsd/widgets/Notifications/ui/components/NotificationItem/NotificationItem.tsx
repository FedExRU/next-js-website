import { CloseIcon } from '@fsd/shared'
import {
  Alert,
  AlertTitle,
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
  onClose,
  onClosed,
  onOpened,
  open,
  title,
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null)
  const autoCloseTimer = useRef<null | ReturnType<typeof setTimeout>>(null)

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
    onClose?.(id)
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
    if (open) {
      setCollapseOpen(true)
    } else {
      setFadeOpen(false)
    }
  }, [open])

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
      <Fade in={fadeOpen} onExited={handleFadeExited} timeout={500}>
        <Alert
          action={
            <IconButton
              color="inherit"
              onClick={handleClose}
              size="small"
              sx={{
                bgcolor: 'transparent !important',
                borderBottom: 'none',
                boxShadow: 'none',
              }}
            >
              <CloseIcon />
            </IconButton>
          }
          color={color}
          key={id}
          ref={itemRef}
        >
          {title && <AlertTitle component="p">{title}</AlertTitle>}
          <Typography variant="body2">{message}</Typography>
        </Alert>
      </Fade>
    </Collapse>
  )
}
