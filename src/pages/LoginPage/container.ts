import { connect } from 'react-redux'
import { usersActions } from '../../store/reducers/users'
import { Component } from './LoginPage'
import { withRouter } from '../../HOCs/withRouter'
import { RootState } from 'src/store/reducers'

export const mapStateToProps = (state: RootState) => ({
	users: state.users.list,
	loading: state.users.loading,
	id: state.users.mainUserId,
})

export const mapActionsToProps = {
	fetchUsersStart: usersActions.fetchUsersStart,
	fetchUsersSuccess: usersActions.fetchUsersSuccess,
	fetchUsersFailure: usersActions.fetchUsersFailure,
	setUsersId: usersActions.setUsersId,
	fetchTodosStart: usersActions.fetchTodosStart,
	fetchTodosSuccess: usersActions.fetchTodosSuccess,
	fetchTodosFailure: usersActions.fetchTodosFailure,
}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const LoginPage = withRouter(connector(Component))
