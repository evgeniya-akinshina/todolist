import styles from './Header.module.sass'
import ava from './img/ava.png'
import { ReactComponent as BackIcon } from '../icons/arrow.svg'
import { Link } from 'react-router-dom'

type Props = {
	showArrow: boolean
}

export const Header = ({ showArrow }: Props) => {
	return (
		<div className={styles.header} style={{ justifyContent: showArrow ? 'space-between' : 'flex-end' }}>
			{showArrow && (
				<button onClick={() => window.history.back()} className={styles.arrow}>
					<BackIcon fill='#DCDCDC' width={20} height={20} />
				</button>
			)}

			<Link to='/statistic' className={styles.avaBox}>
				<img className={styles.ava} src={ava} alt='#' />
				<div className={styles.online} />
			</Link>
		</div>
	)
}
