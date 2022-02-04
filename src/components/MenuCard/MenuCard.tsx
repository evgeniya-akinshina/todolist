import styles from './MenuCard.module.sass'
import { Link } from 'react-router-dom'
import { Props } from './types'
import * as React from 'react'

export const MenuCard = ({ title, subTitle, to, progress }: Props) => {
	return (
		<Link to={to} className={styles.container}>
			{progress && (
				<div className={styles.progress} style={{ width: `${(progress.value / progress.total) * 100}%` }} />
			)}
			<div className={styles.card}>
				<h3 className={styles.letter}>{title[0]}</h3>
				<div className={styles.content}>
					<h3 className={styles.title}>{title}</h3>
					{subTitle && <p>{subTitle}</p>}
				</div>
			</div>
		</Link>
	)
}
