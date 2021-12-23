import { Props } from './types'
import styles from './Title.module.sass'

export const Title = ({ title, subTitle }: Props) => {
	return (
		<div className={styles.title}>
			<h2>{title}</h2>
			<h5>{subTitle}</h5>
		</div>
	)
}
