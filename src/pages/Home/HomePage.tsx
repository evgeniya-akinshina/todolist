import React from 'react'
import { PageContent } from '../../components/layout/PageContent'
import { Header } from '../../components/layout/Header'
import { MenuCard } from '../../components/MenuCard'
import styles from './HomePage.module.sass'
import { Button } from '../../components/Button'
import { Props } from './types'

export class HomePage extends React.Component<Props> {
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