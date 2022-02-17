import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import styles from './StatisticPage.module.sass'

export class StatisticPage extends React.Component {
	render() {
		return (
			<div className={styles.content}>
				<Header title={`Hey Jane,\nThese are your statistics.`} canGoBack={true} />
				<Button showButton={false} />
			</div>
		)
	}
}
