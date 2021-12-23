import styles from './Header.module.sass'
import ava from './img/ava.png'
import { Link } from '@reach/router';
import { ReactComponent as BackIcon } from '../icons/arrow.svg'

type Props = {
    showArrow: boolean,
}

export const Header = ({ showArrow }:Props) => {
    function goBack() {
        window.history.back()
    }

    return (
        <div className={styles.header}>
            {showArrow ?
                <Link to="#" onClick={goBack}>
                    <BackIcon className={styles.arrow} fill='#DCDCDC' />
                </Link> : null}
            <div className={styles.ava_container}>
                <Link to="/statistic">
                    <img className={styles.ava} src={ava} alt='#' />
                    <div className={styles.online}></div>
                </Link>
            </div>
        </div>
    )
}