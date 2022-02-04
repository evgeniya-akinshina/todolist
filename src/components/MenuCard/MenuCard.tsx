import styles from './MenuCard.module.sass'
import { Link } from 'react-router-dom'
import { Props } from './types'
import * as React from 'react'

export const MenuCard = ({ title, subTitle, to, progress }: Props) => {
	return (
		<Link to={to} className={styles.container}>
			{progress && (
				<div className={styles.progress} style={{ width: `${(progress.value / progress.value) * 100}%` }} />
			)}
			<h3>{title[0]}</h3>
			<h3 className={styles.title}>{title}</h3>
			{subTitle && <p>{subTitle}</p>}
		</Link>
	)
}
