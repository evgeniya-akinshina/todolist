import { Button } from '../../components/Button'
import { Header } from '../../components/layout/Header'
import { PageContent } from '../../components/layout/PageContent'
import { Props } from './types'
import styles from './TodosPage.module.sass'

export const TodosPage = ({ user }: Props) => {
	return (
		<>
			<div className={styles.content}>
				<Header title={'Hey ' + user.name + '\nthis is your todo list.'} canGoBack />
				<PageContent>
					{user.todos.map((todo, index) => {
						return (
							<div className={styles.todos} key={index}>
								<p>{`${todo.createAt.toDateString()}`}</p>
								<p>{`${todo.title}`}</p>
							</div>
						)
					})}
				</PageContent>
				<Button className={styles.button} onClick={() => (window.location.href = '/add-new-tasks')} showButton>
					+ Add new task
				</Button>
			</div>
		</>
	)
}
