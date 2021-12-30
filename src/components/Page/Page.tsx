import { Props } from './types'
import { Header } from '../Header'
import styles from './Page.module.sass'
import { Button } from '../Button/Button'

export const Page = (props: Props) => {
	const { children, showButton, ...headerProps } = props
	const { ...buttonProps } = props

	return (
		<>
			<Header {...headerProps} />
			<main className={styles.main}>{children}</main>
			{showButton ? <Button {...buttonProps} /> : null}
		</>
	)
}
