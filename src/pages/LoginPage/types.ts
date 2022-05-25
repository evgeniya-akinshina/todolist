import { ConnectedProps } from 'react-redux'
import { ServerUser } from 'src/controllers/user-controller/types'
import { Todo } from 'src/store/reducers/users'
import { WithRouter } from '../../HOCs/withRouter'
import { connector } from './container'

export type Props = ConnectedProps<typeof connector> & WithRouter & {}

export type State = {
	userId: string
	hasPreviousUsers: boolean
	serverUsers: ServerUser[]
	serverTodos: Todo[]
}
