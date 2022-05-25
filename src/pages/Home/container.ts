import { connect } from 'react-redux'
import { HomePage as Component } from './HomePage'
import { getMainUsers } from '../../store/reducers/users/selectors'
import { RootState } from 'src/store/reducers'

export const mapStateToProps = (state: RootState) => ({
	user: getMainUsers(state),
	usersCount: state.users.list.length,
})

export const mapActionsToProps = {}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const HomePage = connector(Component)
