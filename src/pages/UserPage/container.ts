import { connect } from 'react-redux'

import { UserPage as Component } from './UserPage'
import { PageProps } from './types'
import { withRouter } from '../../HOCs/withRouter'
import { RootState } from 'src/store/reducers'

export const mapStateToProps = (state: RootState, props: PageProps) => ({
	user: state.users.list.find(user => user.id === props.router.params.id),
})

export const mapActionsToProps = {}

export const connector = connect(mapStateToProps, mapActionsToProps)

export const UserPage = withRouter(connector(Component))
