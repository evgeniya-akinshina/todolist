import React from 'react'
import { Header } from '../../components/layout/Header'
import { PageContent } from '../../components/layout/PageContent'
import { MenuCard } from '../../components/MenuCard'
import styles from './UsersPage.module.sass'
import { Indicator } from '../../components/Indicator'
import { DateRangeFilter } from '../../components/Indicator/types'
import { Props, State } from './types'
import { checkDateInRange } from '../../helpers/dateHelper'

export class UsersPage extends React.Component<Props, State> {
	state: State = {
		filter: DateRangeFilter.DAY,
	}

	setFilter = (filter: DateRangeFilter) => this.setState({ filter })

	render() {
		const { users } = this.props

		const today = new Date().getDate()

		return (
			<>
				<Header title={`Hey Jane,\nthis is list of all users.`} canGoBack />
				<Indicator onClick={this.setFilter} filter={this.state.filter} />

				<PageContent>
					{users.length > 0 && (
						<div className={styles.menu}>
							{users.map((user, index) => {
								let value, total
								if (this.state.filter === DateRangeFilter.DAY) {
									const todos = user.todos.filter(todo => todo.createAt.getDate() === today)
									value = todos.filter(todo => todo.completed).length
									total = todos.length
								}

								if (this.state.filter === DateRangeFilter.WEEK) {
									const week = user.todos.filter(todo => checkDateInRange(todo.createAt))
									value = week.filter(todo => todo.completed).length
									total = week.length
								}

								return (
									<div className={styles.menuItem} key={index}>
										<MenuCard
											title={user.name}
											to={`/user/${user.id}`}
											subTitle={user.todos.length + ' todos'}
											progress={value && total ? { value, total } : undefined}
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
