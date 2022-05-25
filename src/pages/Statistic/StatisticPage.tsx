import { Header } from '../../components/layout/Header'
import { Props } from './types'
import styles from './StatisticPage.module.sass'

export const StatisticPage = ({ user }: Props) => {
	return (
		<>
			<div className={styles.content}>
				<Header title={'Hey ' + user.name + '\nThese are your statistics.'} canGoBack={true} />
			</div>
		</>
	)
}
