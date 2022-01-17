import { connect } from 'react-redux'
import { usersActions } from '../../store/reducers/users'
import { RootState } from '../../store/types'
import { UsersPage as Component } from './UsersPage'

export const mapStateToProps = (state: RootState) => ({
	users: state.users.users,
})

export const mapActionsToProps = {
	fetchUsersStart: usersActions.fetchUsersStart,
	fetchUsersSuccess: usersActions.fetchUsersSuccess,
	fetchUsersFailure: usersActions.fetchUsersFailure,
}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const UsersPage = connector(Component)
