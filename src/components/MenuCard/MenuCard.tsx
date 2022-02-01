import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './MenuCard.module.sass'
import { Link } from 'react-router-dom'
import { Props } from './types'
import { ProgressBar } from 'react-bootstrap'

export const MenuCard = ({ title, subTitle, link, activeLink, showProgressBars }: Props) => {
	return activeLink ? (
		<>
			<Link to={link} className={styles.container}>
				{showProgressBars ? <ProgressBar variant='info' now={100} style={{ height: 10 }} /> : null}
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
