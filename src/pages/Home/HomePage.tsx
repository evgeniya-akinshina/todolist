import React from 'react'
import { PageContent } from '../../components/layout/PageContent'
import { Header } from '../../components/layout/Header'
import { Button } from '../../components/Button/Button'
import { MenuCard } from '../../components/MenuCard'
import styles from './HomePage.module.sass'

const data = [
	{
		title: 'Todos',
		subTitle: '4 todos',
		link: 'todos',
	},
	{
		title: 'Users',
		subTitle: '4 users',
		link: 'users',
	},
]

export class HomePage extends React.Component {
	render() {
		return (
			<>
				<Header title="Jane's Profile" canGoBack={false} />
				<PageContent>
					<div className={styles.menu}>
						{data.map((card, index) => (
							<div key={index} className={styles.menuItem}>
								<MenuCard activeLink {...card} />
							</div>
						))}
					</div>
				</PageContent>
				<Button onClick={() => (window.location.href = '/add-new-tasks')} showButton={true}>+ Add new tasks</Button>
			</>
		)
	}
}
