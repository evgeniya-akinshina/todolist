import React from 'react'
import { Header } from '../../components/layout/Header'
import { PageContent } from '../../components/layout/PageContent'
import { MenuCard } from '../../components/MenuCard'
import styles from './UsersPage.module.sass'
import { Indicator } from '../../components/Indicator'
import { DateRangeFilter } from '../../components/Indicator/types'
import { Props, State } from './types'
import { checkDateInRange, getCurrentWeek } from '../../helpers/dateHelper'
import { Todo } from '../../store/reducers/users'

export class UsersPage extends React.Component<Props, State> {
	state: State = {
		filter: DateRangeFilter.DAY,
	}

	setFilter = (filter: DateRangeFilter) => this.setState({ filter })

	render() {
		const { users } = this.props

		return (
			<>
				<Header title={`Hey Jane,\nthis is list of all users.`} canGoBack />
				<Indicator onClick={this.setFilter} filter={this.state.filter} />

				<PageContent>
					{users.length > 0 && (
						<div className={styles.menu}>
							{users.map((user, index) => {
								let todosFilterFn: ((todo: Todo) => boolean) | undefined

								switch (this.state.filter) {
									case DateRangeFilter.DAY:
										todosFilterFn = todo => todo.createAt.getDate() === new Date().getDate()
										break

									case DateRangeFilter.WEEK: {
										const { start, end } = getCurrentWeek()
										todosFilterFn = todo => checkDateInRange(todo.createAt, start, end)
										break
									}
								}

								let progress

								if (!!todosFilterFn) {
									const todos = user.todos.filter(todosFilterFn)
									progress = { value: todos.filter(todo => todo.completed).length, total: todos.length }
								}

								return (
									<div className={styles.menuItem} key={index}>
										<MenuCard
											title={user.name}
											to={`/user/${user.id}`}
											subTitle={user.todos.length + ' todos'}
											progress={progress}
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
