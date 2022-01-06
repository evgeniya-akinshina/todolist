import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import styles from './UserPage.module.sass'
import axios from 'axios'

export const requestAxiosTodos = async () => {
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
		setTimeout(() => {
			console.log(res.data)
		}, 2000)
	} catch {
		console.log('Error!')
	}
}

requestAxiosTodos()

export const requestAxiosUsers = async () => {
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/users')
		setTimeout(() => {
			console.log(res.data)
		}, 2000)
	} catch {
		console.log('Error!')
	}
}

requestAxiosUsers()

export const randomDate = () => {
	const after = new Date()
	after.setDate(after.getDate() + 31)

	const today = new Date()
	return new Date(today.getTime() + Math.random() * (after.getTime() - today.getTime()))
}

alert(randomDate())

export class UserPage extends React.Component {
	render() {
		return (
			<>
				<div className={styles.content}>
					<Header title='User 1' subTitle='8 tasks' canGoBack />
					<Button
						className={styles.button}
						onClick={() => (window.location.href = '/add-new-tasks')}
						showButton={true}
					>
						+ Add new tasks
					</Button>
				</div>
			</>
		)
	}
}
