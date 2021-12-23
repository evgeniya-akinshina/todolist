import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import styles from '../Home/HomePage.module.sass'

export const StatisticPage = () => {
	return (
		<div className={styles.content}>
			<Header showArrow />
			<Title title='Hey Jane,' subTitle='These are your statistics' />
		</div>
	)
}
