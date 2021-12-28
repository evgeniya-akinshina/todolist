import React from 'react'
import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import styles from '../Home/HomePage.module.sass'

export class StatisticPage extends React.Component {
	render() {
		return <div className={styles.content}>
            <div className={styles.content_header}>
                <Header showArrow />
                <Title title={`Hey Jane,\nThese are your statistics.`} />
            </div>
		</div>
    }
}