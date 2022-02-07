import React from 'react'
import { Header } from '../../components/layout/Header'
import { PageContent } from '../../components/layout/PageContent'
import { MenuCard } from '../../components/MenuCard'
import styles from './UsersPage.module.sass'
import { Props } from './types'

export class UsersPage extends React.Component<Props> {
	render() {
		const { users } = this.props

		const today = new Date().getDate()

		return (
			<>
				<Header title={`Hey Jane,\nthis is list of all users.`} canGoBack />
				<PageContent>
					{users.length > 0 && (
						<div className={styles.menu}>
							{users.map((user, index) => {
								const todos = user.todos.filter(todo => todo.createAt.getDate() === today)

								console.log(todos)

								return (
									<div className={styles.menuItem} key={index}>
										<MenuCard
											title={user.name}
											to={`/user/${user.id}`}
											subTitle={user.todos.length + ' todos'}
											progress={{
												value: todos.filter(todo => todo.completed).length,
												total: todos.length,
											}}
										/>
									</div>
								)
							})}
						</div>
					)}
				</PageContent>
			</>
		)
	}
}
