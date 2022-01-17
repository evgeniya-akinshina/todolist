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
							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[0].id}
									link={`/user/${users[0].id}`}
									subTitle={users[0].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[1].id}
									link={`/user/${users[1].id}`}
									subTitle={users[1].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[2].id}
									link={`/user/${users[2].id}`}
									subTitle={users[2].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[3].id}
									link={`/user/${users[3].id}`}
									subTitle={users[3].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[4].id}
									link={`/user/${users[4].id}`}
									subTitle={users[4].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[5].id}
									link={`/user/${users[5].id}`}
									subTitle={users[5].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[6].id}
									link={`/user/${users[6].id}`}
									subTitle={users[6].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[7].id}
									link={`/user/${users[7].id}`}
									subTitle={users[7].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[8].id}
									link={`/user/${users[8].id}`}
									subTitle={users[8].todos.length + ' todos'}
								/>
							</div>

							<div className={styles.menuItem}>
								<MenuCard
									activeLink
									title={'User ' + users[9].id}
									link={`/user/${users[9].id}`}
									subTitle={users[9].todos.length + ' todos'}
								/>
							</div>
						</div>
					)}
				</PageContent>
			</>
		)
	}
}
