import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import styles from './UserPage.module.sass'
import { Props } from './types'
import { useParams } from 'react-router-dom'
import { PageContent } from '../../components/layout/PageContent'
import find from 'lodash/find'
import { User } from '../../store/reducers/users'

export const UserPage = (props: Props) => {
	const { users } = props
	const { id } = useParams()
	const user = find(users, { id: Number(id) }) as User
	// users.find(user => user.id === id)
	return (
		<>
			{users.length > 0 && (
				<div className={styles.content}>
					<Header title={user.name} subTitle={user.todos.length + ' todos'} canGoBack />
					<PageContent>
						{user.todos.map(todo => {
							return (
								<>
									<p>{`${todo.id}`}</p>
									{/* how make numeration only before 20 */}
									<p>{`${todo.createAt.toDateString()}`}</p>
									<p>{`${todo.title}`}</p>
								</>
							)
						})}
					</PageContent>
					<Button className={styles.button} onClick={() => (window.location.href = '/add-new-tasks')} showButton>
						+ Add new task
					</Button>
				</div>
			)}
		</>
	)
}
