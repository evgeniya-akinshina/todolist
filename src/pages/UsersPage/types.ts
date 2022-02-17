import { ConnectedProps } from 'react-redux'
import { connector } from './container'
import { DateRangeFilter } from '../../components/Indicator/types'

export type Props = ConnectedProps<typeof connector> & {}

export type State = {
	filter: DateRangeFilter
}
