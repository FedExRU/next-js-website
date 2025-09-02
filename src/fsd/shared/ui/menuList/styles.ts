import { createSxStyles, VIEW } from '../../lib'
import { GetStylesProps } from './types'

export const getStyles = ({ view = VIEW.DESKTOP }: GetStylesProps) => {
  const isMobileView = view === VIEW.MOBILE

  return createSxStyles({
    menu: {
      display: 'flex',
      margin: 'auto',
      width: isMobileView ? '100%' : 'auto',
    },
    menuList: theme => ({
      display: 'flex',
      flexDirection: isMobileView ? 'column' : 'row',
      margin: isMobileView ? 0 : theme.spacing(0, 5),
      padding: 0,
      width: isMobileView ? '100%' : 'auto',
    }),
  })
}
