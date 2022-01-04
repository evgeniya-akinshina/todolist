import React from 'react'
import { Page } from '../../components/Page'

export class StatisticPage extends React.Component {
	render() {
		return <Page title={`Hey Jane,\nThese are your statistics.`} canGoBack={true} showButton={false}></Page>
	}
}
