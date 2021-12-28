import styles from './Todo.module.sass'
import list from './img/list.png'
import { Link } from 'react-router-dom'

export const Todo = () => {
    return <Link to='/todos' style={{textDecoration: 'none'}}>
                <div className={styles.box_todos}>
                    <img className={styles.list} src={list} alt='#' />
                    <h3>To do</h3>
                    <p>4 lists</p>
                </div>
            </Link>
}