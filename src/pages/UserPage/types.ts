import { ConnectedProps } from 'react-redux'
import { connector } from './container'
import { WithRouter } from '../../HOCs/withRouter'

export type PageProps = WithRouter & {}

export type Props = ConnectedProps<typeof connector> & PageProps
