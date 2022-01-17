import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import styles from './UserPage.module.sass'
import { Props } from './types'
import { useParams } from 'react-router-dom'

export const UserPage = (props: Props) => {
	const { users } = props
	const { id } = useParams()
	return (
		<>
			{users.length > 0 && (
				<div className={styles.content}>
					{id === '1' ? (
						<Header title={'User ' + users[0].id} subTitle={users[0].todos.length + ' todos'} canGoBack />
					) : null}
					{id === '2' ? (
						<Header title={'User ' + users[1].id} subTitle={users[1].todos.length + ' todos'} canGoBack />
					) : null}
					{id === '3' ? (
						<Header title={'User ' + users[2].id} subTitle={users[2].todos.length + ' todos'} canGoBack />
					) : null}
               {id === '4' ? (
						<Header title={'User ' + users[3].id} subTitle={users[3].todos.length + ' todos'} canGoBack />
					) : null}
               {id === '5' ? (
						<Header title={'User ' + users[4].id} subTitle={users[4].todos.length + ' todos'} canGoBack />
					) : null}
               {id === '6' ? (
						<Header title={'User ' + users[5].id} subTitle={users[5].todos.length + ' todos'} canGoBack />
					) : null}
               {id === '7' ? (
						<Header title={'User ' + users[6].id} subTitle={users[6].todos.length + ' todos'} canGoBack />
					) : null}
               {id === '8' ? (
						<Header title={'User ' + users[7].id} subTitle={users[7].todos.length + ' todos'} canGoBack />
					) : null}
               {id === '9' ? (
						<Header title={'User ' + users[8].id} subTitle={users[8].todos.length + ' todos'} canGoBack />
					) : null}
               {id === '10' ? (
						<Header title={'User ' + users[9].id} subTitle={users[9].todos.length + ' todos'} canGoBack />
					) : null}
					<Button className={styles.button} onClick={() => (window.location.href = '/add-new-tasks')} showButton>
						+ Add new task
					</Button>
				</div>
			)}
		</>
	)
}
