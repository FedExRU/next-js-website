import { useAdaptive } from '@frontend/shared/lib'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Tooltip from '@mui/material/Tooltip'

import { LayoutType, useLayoutContext } from '../../contexts'
import { LAYOUT_ITEMS, TOOLTIP_DELAY } from './constants'

export const ProductsLayoutSwitcher: React.FC = () => {
  const { changeLayout, layout } = useLayoutContext()
  const { isMobile, isTablet } = useAdaptive()

  const isMobileView = isTablet || isMobile

  const makeHandleChangeLayout = (type: LayoutType) => () => {
    changeLayout(type)
  }

  return (
    <ButtonGroup aria-label="Layout Variants Group">
      {LAYOUT_ITEMS.map(({ icon, isVisibleInMobileView, label, value }) =>
        !isMobileView || (isMobileView && isVisibleInMobileView !== false) ? (
          <Tooltip
            arrow
            enterDelay={TOOLTIP_DELAY}
            enterNextDelay={TOOLTIP_DELAY}
            key={value}
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, -14],
                    },
                  },
                ],
              },
            }}
            title={label}
          >
            <Button
              aria-label={label}
              onClick={makeHandleChangeLayout(value)}
              tabIndex={layout === value ? -1 : 0}
              variant={layout === value ? 'contained' : 'outlined'}
            >
              {icon}
            </Button>
          </Tooltip>
        ) : null,
      )}
    </ButtonGroup>
  )
}
