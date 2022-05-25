import styles from './ButtonLogout.module.sass'
import { ReactComponent as Icon } from './logout.svg'
import { Props } from './types'

export const ButtonLogout = ({ logoutButton }: Props) => (
	<button>
		<Icon className={styles.icon} onClick={logoutButton} />
	</button>
)
