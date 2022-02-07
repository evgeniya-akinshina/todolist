import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import { PageContent } from '../../components/layout/PageContent'
import { Props } from './types'
import styles from './TodosPage.module.sass'

export class TodosPage extends React.Component<Props> {
	render() {
		const { users } = this.props
		return (
			<>
				{users.length > 0 && (
					<div className={styles.content}>
						<Header title={`Hey Jane,\nthis is your todo list.`} canGoBack />
						<PageContent>
							{users[0].todos.map(todo => {
								return (
									<div className={styles.todos}>
										<p>{`${todo.createAt.toDateString()}`}</p>
										<p>{`${todo.title}`}</p>
									</div>
								)
							})}
						</PageContent>
						<Button
							className={styles.button}
							onClick={() => (window.location.href = '/add-new-tasks')}
							showButton
						>
							+ Add new task
						</Button>
					</div>
				)}
			</>
		)
	}
}
