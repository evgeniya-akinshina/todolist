import styles from './Indicator.module.sass'
import { DateRangeFilter, Props } from './types'

export const Indicator = ({ filter, onClick }: Props) => {
	return (
		<div className={styles.indicator}>
			<div>
				<button onClick={() => onClick(DateRangeFilter.DAY)}>TODAY</button>
				{filter === DateRangeFilter.DAY && <div className={styles.strip} />}
			</div>
			<div>
				<button onClick={() => onClick(DateRangeFilter.WEEK)}>WEEK</button>
				{filter === DateRangeFilter.WEEK && <div className={styles.strip} />}
			</div>
		</div>
	)
}
