import { ConnectedProps } from 'react-redux'
import { connector } from './container'

export type Props = ConnectedProps<typeof connector> & {}
