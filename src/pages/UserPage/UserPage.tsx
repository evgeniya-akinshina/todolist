import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import styles from './UserPage.module.sass'
import { Props } from './types'
import { PageContent } from '../../components/layout/PageContent'

export class UserPage extends React.Component<Props, {}> {
	render() {
		const { user } = this.props

		return (
			<>
				{!!user && (
					<div className={styles.content}>
						<Header title={user.name} subTitle={user.todos.length + ' todos'} canGoBack />
						<PageContent>
							{user.todos.map(todo => {
								return (
									<>
										<p>{`${todo.createAt.toDateString()}`}</p>
										<p>{`${todo.title}`}</p>
									</>
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
