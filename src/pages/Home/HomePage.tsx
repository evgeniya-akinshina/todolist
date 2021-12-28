import React from 'react'
import { MenuCard } from '../../components/MenuCard/MenuCard'
import { Page } from '../../components/Page'

const data = [
	{
		title: 'Todos',
		subTitle: '4 todos',
	},
	{
		title: 'Users',
		subTitle: '4 users',
	},
]

export class HomePage extends React.Component {
	render() {
		return (
			<Page title="Jane's Profile" canGoBack={false}>
				<div style={{ marginTop: '-20px' }}>
					{data.map((card, index) => (
						<div key={index} style={{ marginTop: '20px' }}>
							<MenuCard {...card} />
						</div>
					))}
				</div>
			</Page>
		)
	}
}
