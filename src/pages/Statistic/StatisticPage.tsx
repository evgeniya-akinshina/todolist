import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import styles from '../Home/HomePage.module.sass'

export const StatisticPage = () => {
	return (
		<div className={styles.content}>
            <div className={styles.content_header}>
                <Header showArrow />
                <Title title={`Hey Jane,\nThese are your statistics.`} />
            </div>
		</div>
	)
}