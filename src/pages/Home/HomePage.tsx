import React from 'react'
import { PageContent } from '../../components/layout/PageContent'
import { Header } from '../../components/layout/Header'
import { MenuCard } from '../../components/MenuCard'
import styles from './HomePage.module.sass'
import { Button } from '../../components/Button'
import axios from 'axios'
import { Todo, User } from '../../store/reducers/users'
import { Props } from './types'
import { randomDate } from '../../helpers/helpers'

// import groupBy from 'lodash/groupBy'

export class HomePage extends React.Component<Props> {
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
				const todosGroupedByUserId: Record<number, Todo[]> = {}

				todos.forEach(todo => {
					todo.createAt = randomDate()
					todosGroupedByUserId[todo.userId]
						? todosGroupedByUserId[todo.userId].push(todo)
						: (todosGroupedByUserId[todo.userId] = [todo])
				})

				const userArray = users.map(user => ({
					id: user.id,
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
		const { users } = this.props

		return (
			<>
				<Header title="Jane's Profile" canGoBack={false} />
				<PageContent>
					{users.length > 0 && (
						<div className={styles.menu}>
							<div className={styles.menuItem}>
								<MenuCard activeLink title='Todos' link='todos' subTitle={users[0].todos.length + ' todos'} />
							</div>

							<div className={styles.menuItem}>
								<MenuCard activeLink title='Users' link='users' subTitle={users.length + ' users'} />
							</div>
						</div>
					)}
				</PageContent>
				<Button onClick={() => (window.location.href = '/add-new-tasks')} showButton>
					+ Add new tasks
				</Button>
			</>
		)
	}
}
