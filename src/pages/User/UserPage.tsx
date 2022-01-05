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

export class UserPage extends React.Component {
	render() {
		return (
			<>
				<div className={styles.content}>
					<Header title='User 1' subTitle='8 tasks' canGoBack />
               <Button className={styles.button} onClick={() => (window.location.href = '/add-new-tasks')} showButton={true}>+ Add new tasks</Button>
				</div>
			</>
		)
	}
}
