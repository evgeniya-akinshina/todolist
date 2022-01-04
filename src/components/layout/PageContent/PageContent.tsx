import styles from './Page.module.sass'
import { PropsWithChildren } from 'react'

export const PageContent = ({ children }: PropsWithChildren<{}>) => {
	return <main className={styles.main}>{children}</main>
}
