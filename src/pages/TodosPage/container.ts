import { connect } from 'react-redux'
import { RootState } from '../../store/types'
import { TodosPage as Component } from './TodosPage'
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
export const TodosPage = connector(Component)
