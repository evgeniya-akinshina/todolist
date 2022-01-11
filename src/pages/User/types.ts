import { connector } from './container'
import { ConnectedProps } from 'react-redux'

export type Props = ConnectedProps<typeof connector> & {}