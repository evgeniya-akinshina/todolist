import axios from 'axios'
import React from 'react'
import { randomDate } from './helpers/helpers'
import { Navigation } from './navigation'
import { Props } from './pages/Home/types'
import { Todo, User, usersActions } from './store/reducers/users'
import { connect } from 'react-redux'
import { RootState } from './store/types'

// import groupBy from 'lodash/groupBy'

export const mapStateToProps = (state: RootState) => ({
	users: state.users.users,
})

export const mapActionsToProps = {
	fetchUsersStart: usersActions.fetchUsersStart,
	fetchUsersSuccess: usersActions.fetchUsersSuccess,
	fetchUsersFailure: usersActions.fetchUsersFailure,
}

export class App extends React.Component<Props> {
	componentDidMount() {
		;(async () => {
			this.props.fetchUsersStart()

			try {
				const [todos, users] = await Promise.all([
					axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then(res => res.data),
					axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(res => res.data),
				])

				if (!users || !todos) {
					console.error('WTF')
					return
				}

				// Lodash
				// const todosGroupedByUserId = groupBy(todos, 'userId')

				// Because we need "createAt" field, we have to do custom groupBy algorithm
				const todosGroupedByUserId: Record<string, Todo[]> = {}

				todos.forEach(todo => {
					todo.createAt = randomDate()
					todosGroupedByUserId[todo.userId]
						? todosGroupedByUserId[todo.userId].push(todo)
						: (todosGroupedByUserId[todo.userId] = [todo])
				})

				const userArray = users.map(user => ({
					id: user.id.toString(),
					name: user.name,
					username: user.username,
					todos: todosGroupedByUserId[user.id],
				}))

				this.props.fetchUsersSuccess(userArray)
			} catch (err) {
				this.props.fetchUsersFailure()
			}
		})()
	}

	render() {
		return <Navigation />
	}
}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const ComponentApp = connector(App)
