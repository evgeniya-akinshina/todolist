import styles from './Header.module.sass'
import ava from './img/ava.png'
import { ReactComponent as BackIcon } from '../../icons/arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Title } from '../Title'
import { Props } from './types'
import { ButtonLogout } from 'src/components/ButtonLogout'
import { useActions } from 'src/hooks/useActions'

// REACT_APP_FLOW=true  npm start
// or
// REACT_APP_FLOW=false  npm start

export const Header = ({ canGoBack, title, subTitle }: Props) => {
	const navigate = useNavigate()
	const { commonActions } = useActions()

	const logout = () => {
		if (process.env.REACT_APP_FLOW === 'true') {
			if (window.confirm('Do you want to completely clean up the data?')) {
				commonActions.logout(true)
			} else {
				commonActions.logout(false)
			}
		}
		if (process.env.REACT_APP_FLOW === 'false') {
			commonActions.logout(false)
		}
		navigate('/')
	}

	console.log(process.env.REACT_APP_FLOW)

	return (
		<header className={styles.header}>
			<div className={styles.top} style={{ justifyContent: 'space-between' }}>
				{canGoBack ? (
					<button onClick={() => window.history.back()} className={styles.arrow}>
						<BackIcon fill='#DCDCDC' width={20} height={20} />
					</button>
				) : (
					<h5>Hi</h5>
				)}

				<Link to='/statistic' className={styles.avaBox}>
					<img className={styles.ava} src={ava} alt='#' />
					<div className={styles.online} />
				</Link>
				<ButtonLogout logoutButton={() => logout()} />
			</div>

			{title && <Title title={title} subTitle={subTitle} />}
		</header>
	)
}
