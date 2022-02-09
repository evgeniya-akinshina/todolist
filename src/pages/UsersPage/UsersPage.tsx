import React from 'react'
import { Header } from '../../components/layout/Header'
import { PageContent } from '../../components/layout/PageContent'
import { MenuCard } from '../../components/MenuCard'
import styles from './UsersPage.module.sass'
import { Props } from './types'
import { Indicator } from '../../components/Indicator'
import { DateRangeFilter } from '../../components/Indicator/types'

export class UsersPage extends React.Component<Props> {
	state = {
		activButton: true,
	}

	toggleBlog = () => {
		this.setState({
			activButton: !this.state.activButton,
		})
	}

	render() {
		const { users } = this.props

		const today = new Date().getDate()

		return (
			<>
				<Header title={`Hey Jane,\nthis is list of all users.`} canGoBack />
				<PageContent>
					<Indicator
						onClick={this.toggleBlog}
						filter={this.state.activButton ? DateRangeFilter.DAY : DateRangeFilter.MONTH}
					/>
					{users.length > 0 && (
						<div className={styles.menu}>
							{users.map((user, index) => {
								const todos = user.todos.filter(todo => todo.createAt.getDate() === today)
								const todayValue = todos.filter(todo => todo.completed).length
								const todayTotal = todos.length
								const weekValue = user.todos.filter(todo => todo.completed).length
								const weekTotal = user.todos.length

								return (
									<div className={styles.menuItem} key={index}>
										<MenuCard
											title={user.name}
											to={`/user/${user.id}`}
											subTitle={user.todos.length + ' todos'}
											progress={
												today
													? {
															value: todayValue,
															total: todayTotal,
													  }
													: { value: weekValue, total: weekTotal }
											}
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
