import { Props } from './types'
import { Header } from '../Header'
import styles from './Page.module.sass'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export const Page = (props: Props) => {
	const { link, children, showButton, ...headerProps } = props

	return (
		<>
			<Header {...headerProps} />
			<main className={styles.main}>{children}</main>
			<Link to={link}>{showButton ? <Button /> : null}</Link>
		</>
	)
}
