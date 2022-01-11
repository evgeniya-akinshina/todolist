import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import styles from './UserPage.module.sass'
import axios from 'axios'
import { User } from '../../store/reducers/users'
import { Todo } from '../../store/reducers/todos'
import {Props} from './types'
// import { randomDate } from '../../servises/helpers'

export class UserPage extends React.Component<Props> {
	componentDidMount() {
		;(async () => {
			try {
				const [todos, users] = await Promise.all([
					axios
						.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
						.then(res => res.data),	
					axios
						.get<User[]>('https://jsonplaceholder.typicode.com/users')
						.then(res => res.data),
				])
				if (users && todos) {
					const userArray = users.map(user => ({
						id: user.id,
						name: user.name,
						username: user.username,
						todos: todos.filter(todo => todo.userId === user.id),
					}))
					// todo.userId === user.id
					console.log(userArray.map(item => ({ ...item, todos: item.todos.map(todo => todo.title) })))
				}
			} catch (err) {}
		})()
	}
	render() {
		return (
			<>
				<div className={styles.content}>
					<Header title='User 1' subTitle='8 tasks' canGoBack />
					<Button
						className={styles.button}
						onClick={() => (window.location.href = '/add-new-tasks')}
						showButton={true}
					>
						+ Add new tasks
					</Button>
				</div>
			</>
		)
	}
}
