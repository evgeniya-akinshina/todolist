import styles from './Header.module.sass'
import ava from './img/ava.png'
import { ReactComponent as BackIcon } from '../icons/arrow.svg'
import { Link } from 'react-router-dom'
import { Title } from '../Title'
import { Props } from './types'

export const Header = ({ canGoBack, title, subTitle }: Props) => {
	return (
		<header className={styles.header}>
			<div className={styles.top} style={{ justifyContent: canGoBack ? 'space-between' : 'flex-end' }}>
				{canGoBack ? (
					<button onClick={() => window.history.back()} className={styles.arrow}>
						<BackIcon fill='#DCDCDC' width={20} height={20} />
					</button>
				) : (
					<div className={styles.text}> 
						<h4>Hi</h4>
					</div>
				)}

				<Link to='/statistic' className={styles.avaBox}>
					<img className={styles.ava} src={ava} alt='#' />
					<div className={styles.online} />
				</Link>
			</div>

			{title && <Title title={title} subTitle={subTitle} />}
		</header>
	)
}
