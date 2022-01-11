import { connect } from 'react-redux'
import { todosActions } from '../../store/reducers/todos'
import { RootState } from '../../store/types'
import { UserPage as Component } from './UserPage'

export const mapStateToProps = (state: RootState) => ({
	data: state.todos.data,
	error: state.todos.error,
})

export const mapActionsToProps = {
	getTodosStart: todosActions.getTodosStart,
	getTodosSuccess: todosActions.getTodosSuccess,
	getTodosFailure: todosActions.getTodosFailure,
}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const UserPage = connector(Component)