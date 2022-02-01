import { connect } from 'react-redux'
import { RootState } from '../../store/types'
import { UserPage as Component } from './UserPage'
import { PageProps } from './types'
import { withRouter } from '../../HOCs/withRouter'

export const mapStateToProps = (state: RootState, props: PageProps) => ({
	user: state.users.users.find(user => user.id === props.router.params.id),
})

export const mapActionsToProps = {}

export const connector = connect(mapStateToProps, mapActionsToProps)

export const UserPage = withRouter(connector(Component))
