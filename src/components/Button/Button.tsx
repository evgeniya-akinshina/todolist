import { Props } from './types'
import styles from './Button.module.sass'

export const goByLink = (link: string) => (window.location.href = link)

export const Button = ({ text, onClick }: Props) => (
	<button className={styles.button} onClick={onClick}>
		{text}
	</button>
)
