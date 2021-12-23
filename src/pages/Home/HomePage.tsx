import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import styles from './HomePage.module.sass'

export const HomePage = () => {
	return (
		<div className={styles.content}>
			<Header showArrow={false} />
			<Title title="Jane's Profile" subTitle='11 tasks' />
		</div>
	)
}
