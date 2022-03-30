import axios from 'axios'
import React from 'react'
import { Loader } from '../../components/Loader'
import { randomDate } from '../../helpers/helpers'
import { Todo } from '../../store/reducers/users'
import styles from './LoginPage.module.sass'
import { Props, State, ServerUser } from './types'

export class Component extends React.Component<Props, State> {
	state: State = {
		userId: '',
		userArray: [],
	}

	onInput = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
		const index = this.state.userArray.findIndex(userId => userId.id.toString() === value)
		if (index !== -1 || value === '') {
			this.setState({ userId: value })
		}
	}

	componentDidMount() {
		this.getUsers()
	}

	getUsers = async () => {
		this.props.fetchUsersStart()
		if (this.props.users.length === 0) {
			try {
				const [users] = await Promise.all([
					axios.get<ServerUser[]>('https://jsonplaceholder.typicode.com/users').then(res => res.data),
					new Promise(resolve => setTimeout(resolve, 1000)),
				])

				console.log('request there')
				this.setState({ userArray: users })
				this.props.fetchUsersSuccess()
			} catch (err) {
				this.props.fetchUsersFailure()
			}
		} else {
			try {
				await Promise.all([new Promise(resolve => setTimeout(resolve, 1000))])
				this.props.fetchUsersSuccess()
				this.setState({ userArray: this.props.users })
			} catch (err) {
				this.props.fetchUsersFailure()
			}
		}
	}

	login = async () => {
		this.props.setUsersId(this.state.userId)
		this.props.fetchTodosStart()

		try {
			const [todos] = await Promise.all([
				axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then(res => res.data),
				new Promise(resolve => setTimeout(resolve, 1000)),
			])

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

			const userArray = this.state.userArray.map(user => ({
				id: user.id.toString(),
				name: user.name,
				username: user.username,
				todos: todosGroupedByUserId[user.id],
			}))

			this.props.fetchTodosSuccess(userArray)
			this.props.router.navigate('/home')
		} catch (err) {
			this.props.fetchTodosFailure()
		}
	}

	render() {
		console.log(this.state.userArray, this.state.userId)
		return this.props.loading ? (
			<Loader />
		) : (
			<div className={styles.section_form}>
				<form className={styles.form}>
					<label>Type user's id (1-10) </label>
					<input type='text' value={this.state.userId} onInput={this.onInput} placeholder='id' />
					<button className={styles.btn} disabled={!this.state.userId} onClick={() => this.login()}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
