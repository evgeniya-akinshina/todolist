import { Props } from './types'
import styles from './Button.module.sass'
import classNames from 'classnames'

export const Button = ({ className, ...props }: Props) => (
	<button {...props} className={classNames(styles.button, { [className!]: className })} />
)
