import React from 'react'
import { Header } from '../../components/layout/Header'
import { PageContent } from '../../components/layout/PageContent'
import { MenuCard } from '../../components/MenuCard'
import styles from './UsersPage.module.sass'
import { Props } from './types'

export class UsersPage extends React.Component<Props> {
	render() {
		const { users } = this.props

		return (
			<>
				<Header title={`Hey Jane,\nthis is list of all users.`} canGoBack />
				<PageContent>
					{users.length > 0 && (
						<div className={styles.menu}>
							{users.map((user, index) => (
								<div className={styles.menuItem} key={index}>
									<MenuCard
										showProgressBars
										activeLink
										title={user.name}
										link={`/user/${user.id}`}
										subTitle={user.todos.length + ' todos'}
									/>
								</div>
							))}
						</div>
					)}
				</PageContent>
			</>
		)
	}
}
