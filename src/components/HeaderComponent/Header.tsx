import styles from './Header.module.sass'
import ava from './img/ava.png'
import arrow from './img/arrow.png'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.arrow} >
                <img src={arrow} alt='#'></img>
            </div>
            <div className={styles.ava}>
                <img src={ava} alt='#'></img>
            </div>
        </div>
    )
}