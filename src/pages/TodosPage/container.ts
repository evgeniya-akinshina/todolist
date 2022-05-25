import { connect } from 'react-redux'

import { TodosPage as Component } from './TodosPage'
import { usersActions } from '../../store/reducers/users'
import { getMainUsers } from 'src/store/reducers/users/selectors'
import { RootState } from 'src/store/reducers'

export const mapStateToProps = (state: RootState) => ({
	user: getMainUsers(state),
})

export const mapActionsToProps = {
	fetchUsersStart: usersActions.fetchUsersStart,
	fetchUsersSuccess: usersActions.fetchUsersSuccess,
	fetchUsersFailure: usersActions.fetchUsersFailure,
}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const TodosPage = connector(Component)
