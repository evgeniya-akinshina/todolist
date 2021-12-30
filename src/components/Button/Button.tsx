import { Props } from './types'
import styles from './Button.module.sass'

export const Button = ({ text }: Props) => <button className={styles.button} children={text} />
