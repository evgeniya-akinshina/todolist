import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import styles from './UserPage.module.sass'
import { Props } from './types'

export class UserPage extends React.Component<Props> {
	render() {
		return (
			<>
				<div className={styles.content}>
					<Header title='User 1' subTitle='8 tasks' canGoBack />
					<Button className={styles.button} onClick={() => (window.location.href = '/add-new-tasks')} showButton>
						+ Add new tasks
					</Button>
				</div>
			</>
		)
	}
}
