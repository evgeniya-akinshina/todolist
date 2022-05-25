import React from 'react'
import { Loader } from '../../components/Loader'
import styles from './LoginPage.module.sass'
import { Props, State } from './types'
import { requestsWithDelay } from 'src/helpers/request'
import { UserController } from 'src/controllers/user-controller'
import { TodoController } from 'src/controllers/todos-controller'
import { randomDate } from 'src/helpers/helpers'
import { ServerUser } from 'src/controllers/user-controller/types'
import { Todo } from 'src/store/reducers/users'
import { UserFormatter } from 'src/controllers/user-controller/user.formatter'

export class Component extends React.Component<Props, State> {
	state: State = {
		userId: '',
		hasPreviousUsers: !!this.props.users.length,
		serverUsers: [],
		serverTodos: [],
	}

	get users() {
		return this.state.hasPreviousUsers ? this.props.users : this.state.serverUsers
	}

	componentDidMount() {
		if (!this.state.hasPreviousUsers) this.getUsers()
	}

	getUsers = async () => {
		this.props.fetchUsersStart()
		try {
			const [serverUsers] = await requestsWithDelay(UserController.fetchUsers().then(res => res.data))

			this.setState({ serverUsers })
			this.props.fetchUsersSuccess()
		} catch (err) {
			this.props.fetchUsersFailure()
		}
	}

	onInput = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
		const index = this.users.findIndex(user => user.id.toString() === value)
		if (index !== -1 || value === '') {
			this.setState({ userId: value })
		}
	}

	login = async () => {
		this.props.setUsersId(this.state.userId)

		if (this.state.hasPreviousUsers) {
			this.props.router.navigate('/home')
			return
		}

		this.props.fetchTodosStart()

		try {
			const [todos] = await requestsWithDelay(TodoController.fetchTodos().then(res => res.data))

			// Lodash
			// const todosGroupedByUserId = groupBy(todos, 'userId')

			// Custom algorithm
			const todosGroupedByUserId: Record<ServerUser['id'], Todo[]> = {}

			todos.forEach(todo => {
				todo.createAt = randomDate()
				todosGroupedByUserId[todo.userId]
					? todosGroupedByUserId[todo.userId].push(todo)
					: (todosGroupedByUserId[todo.userId] = [todo])
			})

			const userArray = UserFormatter.afterfetchUsers()

			this.props.fetchTodosSuccess(userArray)
			this.props.router.navigate('/home')
		} catch (err) {
			this.props.fetchTodosFailure()
		}
	}

	render() {
		const availableIDs: string = this.users.map(user => user.id).join(', ')

		if (this.props.loading) return <Loader />

		return (
			<div className={styles.section_form}>
				<form className={styles.form}>
					<label>{`Enter one of the IDs: (${availableIDs})`}</label>
					<input
						type='text'
						value={this.state.userId}
						onInput={this.onInput}
						placeholder='id'
						style={{ textAlign: 'center' }}
					/>
					<button className={styles.btn} disabled={!this.state.userId} onClick={this.login}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
