import styles from './Indicator.module.sass'
import { DateRangeFilter, Props } from './types'

export const Indicator = ({ filter, onClick }: Props) => {
	return (
		<div className={styles.indicator}>
			<div>
				<button onClick={onClick}>TODAY</button>
				{filter === DateRangeFilter.DAY && <div className={styles.strip} />}
			</div>
			<div>
				<button onClick={onClick}>WEEK</button>
				{filter === DateRangeFilter.MONTH && <div className={styles.strip} />}
			</div>
		</div>
	)
}
