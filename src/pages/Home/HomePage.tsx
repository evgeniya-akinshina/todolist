import React from 'react'
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { Todo } from '../../components/Todo/Todo'
import styles from './HomePage.module.sass'

export class HomePage extends React.Component {
	render() {
       return  <div className={styles.content}>
        <div className={styles.content_header}>
            <Header showArrow={false} />
            <Title title="Jane's Profile" subTitle='11 tasks' />
            <Todo />
        </div>
        <div>
            <Button />
        </div>
    </div>
    }
}
