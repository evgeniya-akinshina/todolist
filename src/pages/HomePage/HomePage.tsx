import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import styles from './HomePage.module.sass'

export const HomePage = () => {
    return (
        <div className={styles.content}>
            <Header showArrow={false} />
            <Title text={"Jane's Profile"} tasks={"11 tasks"} />
        </div>
    )
}