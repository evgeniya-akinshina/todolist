import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import { PageContent } from '../../components/layout/PageContent'
import { MenuCard } from '../../components/MenuCard'
import styles from './TodosPage.module.sass'

const data = [
	{
		title: 'User 1',
		subTitle: '7 tasks',
	},
	{
		title: 'User 2',
		subTitle: '4 tasks',
	},
	{
		title: 'User 3',
		subTitle: '2 tasks',
	},
	{
		title: 'User 4',
		subTitle: '11 tasks',
	},
]

export class TodosPage extends React.Component {
	render() {
		return (
			<>
				<Header title={`Hey Jane,\nthis is your to-do list.`} canGoBack />
				<PageContent>
					<div className={styles.menu}>
						{data.map((card, index) => (
							<div key={index} className={styles.menuItem}>
								<MenuCard activeLink={false} {...card} />
							</div>
						))}
					</div>
				</PageContent>
				<Button onClick={() => (window.location.href = '/add-new-tasks')} showButton={false}>
					+ Add new tasks
				</Button>
			</>
		)
	}
}
