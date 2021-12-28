import styles from './Todo.module.sass'
import { Link } from 'react-router-dom'
import { Props } from './types'

export const Todo = ({ title, subTitle, img }: Props) => {
    return <Link to='/todos' style={{ textDecoration: 'none' }}>
        <div className={styles.box_todos}>
            <img className={styles.list} src={img} alt='#' />
            <h3>{title}</h3>
            <p>{subTitle}</p>
        </div>
    </Link>
}