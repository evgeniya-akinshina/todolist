import { Props } from './types'
import styles from './Title.module.sass'

export const Title = ({ text, tasks, additionalText }: Props) => {
    return (
        <div className={styles.title} >
            <h2 children={text}></h2>
            <h2 children={additionalText}></h2>
            <h5 children={tasks}></h5>
        </div>
    )
}