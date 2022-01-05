import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'

export class StatisticPage extends React.Component {
	render() {
		return (
			<>
				<Header title={`Hey Jane,\nThese are your statistics.`} canGoBack={true} />
				<Button showButton={false} />
			</>
		)
	}
}
