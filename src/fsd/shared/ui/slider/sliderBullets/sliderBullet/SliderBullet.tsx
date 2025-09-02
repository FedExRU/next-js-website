import { IconButton } from '../../../iconButton'
import { getStyles } from './styles'
import { SliderBulletProps } from './types'

export const SliderBullet: React.FC<SliderBulletProps> = ({
  isActive,
  onClick,
  ...rest
}) => {
  const { styles } = getStyles({ isActive })
  return <IconButton {...rest} onClick={onClick} sx={styles.bullet} />
}
