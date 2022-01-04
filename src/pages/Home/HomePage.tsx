import React from 'react'
import { goByLink } from '../../components/Button/Button'
import { MenuCard } from '../../components/MenuCard/MenuCard'
import { Page } from '../../components/Page'

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
			<Page
				title="Jane's Profile"
				canGoBack={false}
				showButton={true}
				text='+ ADD NEW TASKS'
				onClick={() => goByLink('/add_new_tasks')}
			>
				<div style={{ marginTop: '-20px', display: 'flex', justifyContent: 'space-around' }}>
					{data.map((card, index) => (
						<div key={index} style={{ marginTop: '20px' }}>
							<MenuCard activeLink={true} {...card} />
						</div>
					))}
				</div>
			</Page>
		)
	}
}
