import styles from './MenuCard.module.sass'
import { Link } from 'react-router-dom'
import { Props } from './types'

export const MenuCard = ({ title, subTitle, link, activeLink }: Props) => {
	return activeLink ? (
		<Link to={'/' + link} className={styles.container}>
			<h3>{title[0]}</h3>
			<h3 className={styles.title}>{title}</h3>
			{subTitle && <p>{subTitle}</p>}
		</Link>
	) : (
		<div className={styles.container}>
			<h3>{title[0]}</h3>
			<h3 className={styles.title}>{title}</h3>
			{subTitle && <p>{subTitle}</p>}
		</div>
	)
}
