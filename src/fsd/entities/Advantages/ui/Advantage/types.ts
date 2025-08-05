import { IAdvantage } from '../../api'

export type AdvantageProps = Pick<IAdvantage, 'description' | 'title'> & {
  icon?: React.ReactNode
}
