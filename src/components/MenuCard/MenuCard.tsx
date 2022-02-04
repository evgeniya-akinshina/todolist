import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './MenuCard.module.sass'
import { Link } from 'react-router-dom'
import { Props } from './types'

export const MenuCard = ({ title, subTitle, link, activeLink, completedCount, totalCount }: Props) => {
	return activeLink && completedCount && totalCount ? (
		<>
			<Link to={link} className={styles.container}>
				<div className={styles.progress} style={{ width: `${(completedCount / totalCount) * 100}%` }} />
				<h3>{title[0]}</h3>
				<h3 className={styles.title}>{title}</h3>
				{subTitle && <p>{subTitle}</p>}
			</Link>
		</>
	) : (
		<div className={styles.container}>
			<h3>{title[0]}</h3>
			<h3 className={styles.title}>{title}</h3>
			{subTitle && <p>{subTitle}</p>}
		</div>
	)
}
