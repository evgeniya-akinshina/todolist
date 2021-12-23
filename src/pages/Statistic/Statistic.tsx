import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import styles from '../HomePage/HomePage.module.sass'

export const Statistic = () => {
    return (
        <div className={styles.content}>
            <Header showArrow={true} />
            <Title text={"Hey Jane,"} additionalText={"These are your statistics."} />
        </div>
    )
}