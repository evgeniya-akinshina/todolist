import { PageContent } from '../../components/layout/PageContent'
import { Header } from '../../components/layout/Header'
import { MenuCard } from '../../components/MenuCard'
import styles from './HomePage.module.sass'
import { Button } from '../../components/Button'
import { Props } from './types'

export const HomePage = ({ user, usersCount }: Props) => {
	return (
		<>
			<Header title={'Profile ' + user.name} canGoBack={false} />
			<PageContent>
				<div className={styles.menu}>
					<div className={styles.menuItem}>
						<MenuCard title='Todos' to='todos' subTitle={user.todos.length + ' todos'} />
					</div>

					<div className={styles.menuItem}>
						<MenuCard title='Users' to='users' subTitle={usersCount + ' users'} />
					</div>
				</div>
			</PageContent>
			<Button onClick={() => (window.location.href = '/add-new-tasks')} showButton>
				+ Add new tasks
			</Button>
		</>
	)
}
