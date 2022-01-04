import React from 'react'

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
		return null
		// return (
		// 	<PageContent title={`Hey Jane,\nthis is your to-do list.`} canGoBack={true} showButton={false}>
		// 		<div
		// 			style={{
		// 				marginTop: '-20px',
		// 				display: 'flex',
		// 				flexWrap: 'wrap',
		// 				flexDirection: 'row',
		// 				paddingTop: '110px',
		// 				justifyContent: 'space-around',
		// 			}}
		// 		>
		// 			{data.map((card, index) => (
		// 				<div key={index} style={{ marginTop: '20px' }}>
		// 					<MenuCard activeLink={false} {...card} />
		// 				</div>
		// 			))}
		// 		</div>
		// 	</PageContent>
		// )
	}
}
