import { connect } from 'react-redux'
import { RootState } from '../../store/types'
import { HomePage as Component } from './HomePage'
import { usersActions } from '../../store/reducers/users'

export const mapStateToProps = (state: RootState) => ({
	users: state.users.users,
})

export const mapActionsToProps = {
	fetchUsersStart: usersActions.fetchUsersStart,
	fetchUsersSuccess: usersActions.fetchUsersSuccess,
	fetchUsersFailure: usersActions.fetchUsersFailure,
}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const HomePage = connector(Component)
