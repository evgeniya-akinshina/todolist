import React from 'react'
import { Button } from '../../components/Button'
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
				<Header title={`Hey Jane,\nthis is your to-do list.`} canGoBack />
				<PageContent>
					{users.length > 0 && (
						<div className={styles.menu}>
							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[0].id}
									link='/user'
									subTitle={users[0].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[1].id}
									link='/user'
									subTitle={users[1].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[2].id}
									link='/user'
									subTitle={users[2].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[3].id}
									link='/user'
									subTitle={users[3].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[4].id}
									link='/user'
									subTitle={users[4].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[5].id}
									link='/user'
									subTitle={users[5].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[6].id}
									link='/user'
									subTitle={users[6].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[7].id}
									link='/user'
									subTitle={users[7].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[8].id}
									link='/user'
									subTitle={users[8].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[9].id}
									link='/user'
									subTitle={users[9].todos.length + ' todos'}
								/>
							</div>
						</div>
					)}
				</PageContent>
				<Button onClick={() => (window.location.href = '/add-new-tasks')} showButton={false}>
					+ Add new tasks
				</Button>
			</>
		)
	}
}
